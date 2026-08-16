# AWS Amplify — deploy zrf-client (same idea as ECS for the server)

Day-to-day: **change code → `git push origin main` → GitHub Actions starts an Amplify job → site updates.**

You do **not** build Next.js on your laptop. Amplify runs `amplify.yml` in the cloud (`npm ci` + `next build`).

This repo is the **public site** (`zrf.info`). The admin portal is a **second** Amplify app if you have a separate admin repo.

**Region:** `ap-south-1` (Mumbai). Keep the Console top-right on this region.

---

## Scratch pad (fill this in as you go)

```text
AWS account ID (12 digits):     573199225945
Region:                         ap-south-1
Amplify app name:               zrf-client
Amplify app ID:                 ________________   (d1xxxxxxxx, from Amplify console)
Amplify default URL:            https://main.______.amplifyapp.com
Backend API URL:                https://api.zrf.info/api/v1
                                (or http://YOUR-ALB.ap-south-1.elb.amazonaws.com/api/v1 until HTTPS)
```

**Names you must type exactly**

| What | Exact name |
| --- | --- |
| GitHub repo | `zrf-client` (this frontend, not `zrf-server`) |
| Branch | `main` |
| Amplify app | `zrf-client` |
| GitHub workflow | `.github/workflows/deploy.yml` |
| Build spec | `amplify.yml` (repo root) |
| Custom domain | `zrf.info` + `www.zrf.info` |
| GitHub IAM user (reuse from ECS) | `github-ecs-deploy` |

---

## How a push is deployed (like the server)

```
git push origin main
        ↓
GitHub Actions  (.github/workflows/deploy.yml)
        ↓
aws amplify start-job   (same AWS keys as ECS)
        ↓
Amplify runs amplify.yml  →  npm ci  →  next build  →  Hosting Compute
        ↓
Live site updates (no downtime)
```

`NEXT_PUBLIC_*` variables are set in the **Amplify Console**, not in GitHub Secrets. GitHub only holds AWS keys + `AMPLIFY_APP_ID`.

---

## How to move around the Console

1. Top **Search** box → type the service name (`Amplify`, `IAM`).
2. Region (top-right) = **ap-south-1**.
3. Keep this README in one tab, AWS in another.

---

## Step 0 — Before you start

- [ ] `zrf-client` is on GitHub. You can push to `main`.
- [ ] Files exist at the **repo root**: `amplify.yml`, `.github/workflows/deploy.yml`.
- [ ] ECS backend is up (`/health` returns 200).
- [ ] IAM user `github-ecs-deploy` already exists (you used it for ECS). You will add one more policy to it.

If the API is still only HTTP on the ALB, use that URL for the first Amplify test. `https://zrf.info` cannot call `http://` ALB (mixed content). For production, use `https://api.zrf.info/api/v1`.

---

## Step 1 — Allow GitHub to start Amplify jobs (IAM)

Reuse the same IAM user as the server. Do **not** create a new access key if you still have the ECS one.

**Direct link:** https://console.aws.amazon.com/iam/home#/users/github-ecs-deploy

**Or:** Search → `IAM` → **Users** → click **`github-ecs-deploy`**.

1. **Add permissions** → **Create inline policy** → **JSON**.
2. Paste this (also saved as `infra/github-amplify-deploy-policy.json`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "StartAndWatchAmplifyJobs",
      "Effect": "Allow",
      "Action": [
        "amplify:StartJob",
        "amplify:GetJob",
        "amplify:ListJobs",
        "amplify:GetApp",
        "amplify:GetBranch"
      ],
      "Resource": "*"
    }
  ]
}
```

3. Policy name: `github-amplify-deploy` → **Create policy**.

- [ ] User `github-ecs-deploy` can start Amplify jobs.

---

## Step 2 — Create the Amplify app and connect GitHub

**Direct link:** https://ap-south-1.console.aws.amazon.com/amplify/apps?region=ap-south-1

**Or:** Search → `Amplify` → **AWS Amplify**.

**You are in the right place if** you see **All apps** and a **Create new app** / **New app** button.

1. Click **Create new app** (or **New app** → **Host web app**).
2. Choose **GitHub** → **Next**.
3. Authorize GitHub if AWS asks. Install the Amplify GitHub App on the org/account that owns `zrf-client`.
4. **Repository:** `zrf-client` — **not** `zrf-server`.
5. **Branch:** `main`.
6. **App name:** `zrf-client`.
7. Amplify must show **Next.js – SSR** (platform **WEB_COMPUTE**). If it says only static Web, stop — the repo is wrong or `next.config` has `output: 'export'` (this repo does not).
8. **Build settings:** use the repo file `amplify.yml`. Confirm:
   - `baseDirectory: .next`
   - cache includes `node_modules/**/*` and `.next/cache/**/*`
9. **Advanced settings** → **Environment variables** — add the table in Step 3 **now** if the wizard shows it. Otherwise add them in Step 3 after the app exists.
10. Click **Save and deploy**. The first build may start automatically. That is OK.

When the app opens, copy **App ID** (looks like `d1a2b3c4d5efgh`) onto the scratch pad.  
App settings → **General** also shows App ID.

- [ ] App `zrf-client` exists. App ID is on the scratch pad.

---

## Step 3 — Environment variables (Amplify Console, not GitHub)

These are **public** (`NEXT_PUBLIC_*`). They are baked into the JS at build time.

1. Open the app `zrf-client`.
2. Left: **Hosting** → **Environment variables**  
   (or **App settings** → **Environment variables**).
3. **Manage variables** / **Add variable**. Add every row:

| Variable | Example value |
| --- | --- |
| `NEXT_PUBLIC_BASE_API_URL` | `https://api.zrf.info/api/v1` |
| `NEXT_PUBLIC_API_URL` | same as above |
| `NEXT_PUBLIC_SITE_URL` | `https://zrf.info` |
| `NEXT_PUBLIC_SITE_NAME` | `zrf` |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | your Cloudinary cloud name |
| `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` | unsigned preset |
| `NEXT_PUBLIC_CHAT_ID` | existing id, or leave empty |

No trailing slash on URLs. Do **not** add `DATABASE_URL` or JWT here.

4. Apply to branch **`main`** → **Save**.
5. **Hosting** → **Build settings** → live package / Node: **20**.

If the first deploy already finished **before** you saved these, you must run a new build (Step 6 or `git push`).

- [ ] Variables saved on branch `main`.

---

## Step 4 — Turn off Amplify auto-build (so only GitHub Actions deploys)

If both Amplify auto-build **and** GitHub Actions run, every push builds **twice**.

1. Amplify app → **Hosting** → **Build settings** (or the **main** branch page).
2. Find **Enable auto-build** / **Automatic builds on every push**.
3. **Turn it OFF**.
4. Save.

GitHub Actions will call `aws amplify start-job` instead — same as ECS `UpdateService`.

- [ ] Auto-build is off. Deploys come from GitHub Actions.

---

## Step 5 — GitHub secrets (this frontend repo)

In the **`zrf-client`** GitHub repo (not zrf-server):

**Settings** → **Secrets and variables** → **Actions** → **New repository secret**.

| Secret | Value |
| --- | --- |
| `AWS_ACCESS_KEY_ID` | same key as the ECS pipeline |
| `AWS_SECRET_ACCESS_KEY` | same secret as the ECS pipeline |
| `AWS_REGION` | `ap-south-1` |
| `AMPLIFY_APP_ID` | App ID from Step 2 (e.g. `d1xxxxxxxx`) |

Do **not** put `NEXT_PUBLIC_BASE_API_URL` in GitHub. That lives in Amplify (Step 3).

- [ ] Four GitHub secrets exist on `zrf-client`.

---

## Step 6 — First deploy from GitHub Actions

1. Commit and push if `amplify.yml` and `.github/workflows/deploy.yml` are not on `main` yet:

```text
git add amplify.yml .github/workflows/deploy.yml README_AMPLIFY.md infra/github-amplify-deploy-policy.json
git commit -m "Add Amplify CI/CD"
git push origin main
```

2. GitHub → **Actions** → **Deploy to AWS Amplify**.
3. The job starts an Amplify build, then waits until status is `SUCCEED` (often 4–10 minutes the first time).
4. Amplify → **Hosting** → **Deployments** — the same job should be green.
5. Open the default URL: `https://main.<app-id>.amplifyapp.com` (Amplify shows it at the top of the app).

If Actions fails with `AccessDenied` on `amplify:StartJob`, finish Step 1.  
If Amplify build fails, open that job’s **Build** log in the Amplify Console.

- [ ] Default Amplify URL loads the site.

---

## Step 7 — Custom domain `zrf.info` (Route 53 + free SSL)

Amplify requests the certificate. You usually do **not** create ACM yourself.

1. Amplify app → **Hosting** → **Custom domains** → **Add domain**.
2. Domain: `zrf.info` (pick the Route 53 hosted zone if it is in this account).
3. Add:
   - `zrf.info` (root)
   - `www.zrf.info` → **redirect** to `zrf.info`
4. **Configure** / **Save**. Wait until SSL is **Available** (can take several minutes).
5. If DNS is **not** in this AWS account, Amplify lists CNAME records. Add them at your DNS host (validation + `www` + apex ALIAS).

Then open `https://zrf.info`.

### `admin.zrf.info`

Different app. Create another Amplify app from the **admin** GitHub repo, then attach `admin.zrf.info` there. Do not point admin at this client.

- [ ] `https://zrf.info` shows a padlock and the ZRF site.

---

## Step 8 — Redirects

Amplify → **Hosting** → **Rewrites and redirects**.

Do **not** add a SPA rule that sends every path to `index.html`. Next.js SSR is handled by Amplify Compute.

If www → apex was not created in Step 7, add:

| Source | Target | Type |
| --- | --- | --- |
| `https://www.zrf.info` | `https://zrf.info` | 301 |
| `https://www.zrf.info/<*>` | `https://zrf.info/<*>` | 301 |

- [ ] `www.zrf.info` redirects to `zrf.info`.

---

## Step 9 — CORS on ECS

Secrets Manager → `zrf/production`:

- `CROSS_ORIGIN_CLIENT` = `https://zrf.info`
- `FRONTEND_URL` = `https://zrf.info`

Then ECS → service → **Update** → **Force new deployment**.

- [ ] Browser on `https://zrf.info` has no CORS errors.

---

## Everyday

```text
git push origin main
```

GitHub Actions → Amplify job → live site. Same mental model as pushing the server to ECS.

Manual run: GitHub → **Actions** → **Deploy to AWS Amplify** → **Run workflow**.

Change API URL: Amplify → Environment variables → save → **Run workflow** (or push). `NEXT_PUBLIC_*` needs a new **build**.

---

## If something fails

| Symptom | Check |
| --- | --- |
| Actions: `AMPLIFY_APP_ID is missing` | GitHub secret `AMPLIFY_APP_ID` |
| Actions: `AccessDenied` `amplify:StartJob` | Step 1 IAM policy on `github-ecs-deploy` |
| Two builds per push | Auto-build still ON — turn it off (Step 4) |
| Amplify build fails `npm ci` | `package-lock.json` must be committed |
| Site loads, APIs 404 | `NEXT_PUBLIC_BASE_API_URL` must end with `/api/v1` |
| Mixed content | HTTPS site + HTTP ALB — use `https://api.zrf.info` |
| Env change does nothing | Redeploy after saving variables |
| Blank page | Platform WEB_COMPUTE; `amplify.yml` `baseDirectory: .next` |

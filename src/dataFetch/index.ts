import { getPublicApiUrl } from "@/config/env";

export async function fetchWelcomeData() {
  const response = await fetch(
    `${getPublicApiUrl()}/banner`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch welcome data");
  }
  return response.json();
}

export async function fetchRecentActivityData() {
  const response = await fetch(
    `${getPublicApiUrl()}/activity`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch welcome data");
  }
  return response.json();
}

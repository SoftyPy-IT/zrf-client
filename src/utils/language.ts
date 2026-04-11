// utils/language.ts
import { cookies } from "next/headers";

export function getLanguageFromCookie(): string {
    const cookieStore = cookies();
    return cookieStore.get("language")?.value || "en";
}

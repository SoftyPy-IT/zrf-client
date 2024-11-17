export async function fetchWelcomeData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/banner`,
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
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/activity`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch welcome data");
  }
  return response.json();
}

const API_BASE_URL = "";

export async function apiGet(endpoint: string) {
  const res = await fetch(API_BASE_URL + endpoint);
  return res.json();
}

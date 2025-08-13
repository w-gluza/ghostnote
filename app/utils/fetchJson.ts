export async function fetchJson<T>(
  url: string,
  init?: RequestInit
): Promise<T> {
  const r = await fetch(url, init);
  if (!r.ok) throw new Error(`Request failed: ${r.status}`);
  return r.json() as Promise<T>;
}

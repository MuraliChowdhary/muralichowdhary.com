export function url(path = "") {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://www.muralichowdhary.com"
      : "http://localhost:3000"

  return new URL(path, baseUrl)
}

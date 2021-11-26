export async function fetchTrendTech() {
  const url = "https://zenn-api.netlify.app/trendTech.json";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

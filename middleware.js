export const config = { matcher: "/(.*)" };

export default function middleware(request) {
  const auth = request.headers.get("authorization") || "";
  const expected = "Basic " + btoa("436:ab");
  if (auth === expected) {
    return; // pokračovat na statický obsah
  }
  return new Response("Autentizace vyžadována", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Monitor 4:36", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}

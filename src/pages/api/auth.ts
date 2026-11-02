import type { APIRoute } from "astro";

// Step 1 of the blog admin login: send the browser to GitHub.
export const prerender = false;

export const GET: APIRoute = ({ url, cookies, redirect }) => {
  const clientId = process.env.GITHUB_CLIENT_ID ?? import.meta.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return new Response("Blog login isn't set up yet: add GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET in Vercel.", { status: 500 });
  }
  const state = crypto.randomUUID();
  cookies.set("oauth_state", state, { path: "/api", httpOnly: true, secure: true, sameSite: "lax", maxAge: 600 });
  const gh = new URL("https://github.com/login/oauth/authorize");
  gh.searchParams.set("client_id", clientId);
  gh.searchParams.set("redirect_uri", new URL("/api/callback", url.origin).toString());
  gh.searchParams.set("scope", url.searchParams.get("scope") || "repo");
  gh.searchParams.set("state", state);
  return redirect(gh.toString(), 302);
};

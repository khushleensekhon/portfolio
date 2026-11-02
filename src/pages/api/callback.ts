import type { APIRoute } from "astro";

// Step 2 of the blog admin login: GitHub sends the user back here with a code,
// we swap it for an access token and hand it to the admin page that opened this popup.
export const prerender = false;

const page = (status: "success" | "error", content: object, origin: string) => {
  const msg = `authorization:github:${status}:${JSON.stringify(content)}`;
  return new Response(
    `<!doctype html><html><body><p>${status === "success" ? "Logged in. You can close this window." : "Login failed. Close this window and try again."}</p>
<script>
(function () {
  var target = ${JSON.stringify(origin)};
  function receive(e) {
    if (e.origin !== target) return;
    window.opener.postMessage(${JSON.stringify(msg)}, target);
    window.removeEventListener("message", receive, false);
  }
  window.addEventListener("message", receive, false);
  window.opener && window.opener.postMessage("authorizing:github", target);
})();
</script></body></html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
};

export const GET: APIRoute = async ({ url, cookies }) => {
  const origin = url.origin;
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const expected = cookies.get("oauth_state")?.value;
  cookies.delete("oauth_state", { path: "/api" });

  if (!code || !state || state !== expected) {
    return page("error", { error: "Login expired or was tampered with. Please try again." }, origin);
  }
  const clientId = process.env.GITHUB_CLIENT_ID ?? import.meta.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET ?? import.meta.env.GITHUB_CLIENT_SECRET;

  try {
    const res = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const data = await res.json();
    if (!data.access_token) {
      return page("error", { error: data.error_description || "GitHub didn't return a token." }, origin);
    }
    return page("success", { token: data.access_token, provider: "github" }, origin);
  } catch {
    return page("error", { error: "Couldn't reach GitHub. Please try again." }, origin);
  }
};

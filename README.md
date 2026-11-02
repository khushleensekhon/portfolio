# Khushleen Kaur Sekhon · Portfolio

Personal portfolio and blog. Built with **Astro 5**, hosted on **Vercel**.

| Part | Tool |
|---|---|
| Site | Astro (static pages), HTML/CSS, a little TypeScript |
| Blog | Markdown files in `src/content/blog`, edited at `/admin` (Decap CMS) |
| Blog login | GitHub OAuth via two small functions in `src/pages/api` |
| Contact form | Web3Forms, delivers to sekhonkhushleen@gmail.com |
| Hosting | Vercel (free), auto-deploys on every push to `main` |

## Where to change things

- **Projects, experience, skills, certifications, events, stats:** `src/data/site.ts`
- **Blog posts:** use `/admin` on the live site, or add a `.md` file in `src/content/blog`
- **Photo:** `public/khushleen.jpg` · **Resume:** `public/Khushleen_Kaur_Sekhon_Resume.pdf`
- **Gallery photos:** put images in `public/images/gallery` and edit `src/pages/gallery.astro`
- **Colours and fonts:** top of `src/styles/global.css`

## One-time setup

### 1. Contact form (2 minutes)
1. Go to https://web3forms.com, enter **sekhonkhushleen@gmail.com**, and copy the access key they email you.
2. In Vercel: Project → Settings → Environment Variables → add `PUBLIC_WEB3FORMS_KEY` = your key.
3. Redeploy (Deployments → ⋯ → Redeploy).

### 2. Blog admin login (5 minutes)
1. GitHub → Settings → Developer settings → **OAuth Apps** → New OAuth App.
   - Homepage URL: `https://YOUR-SITE.vercel.app`
   - Authorization callback URL: `https://YOUR-SITE.vercel.app/api/callback`
2. Copy the **Client ID**, then click **Generate a new client secret** and copy it.
3. In Vercel add `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`, then redeploy.
4. Open `https://YOUR-SITE.vercel.app/admin`, click **Login with GitHub**, and write your first post.

If the GitHub repository is not `khushleensekhon/portfolio`, change `REPO` in `public/admin/index.html`.

## Writing a blog post
1. Open `/admin` → **Blog posts** → **New Post**.
2. Fill in title, date, category, summary and the post itself. Add images with the image button.
3. Click **Publish → Publish now**. The site rebuilds and the post is live in about a minute.
4. Tick **Save as draft** to keep a post hidden until it's ready.

## Run locally
```bash
npm install
npm run dev     # http://localhost:4321
```

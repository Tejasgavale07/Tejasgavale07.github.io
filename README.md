
# Tejas Gavale — Portfolio

Plain HTML/CSS/JS. No build tools, no npm, no framework — this means
GitHub Pages can host it for free with zero configuration.

## Files

| File           | What it is                                             |
| -------------- | ------------------------------------------------------ |
| `index.html` | Page structure                                         |
| `style.css`  | All styling (navy/gold ledger-inspired design)         |
| `script.js`  | Renders`data.js` into the page + animations          |
| `data.js`    | **Edit this.** Every word on the site lives here |
| `resume.pdf` | Add your resume PDF here with this exact filename      |

## 1. Fill in your details

Open `data.js` in VS Code and replace anything in `[BRACKETS]`:
email, phone, LinkedIn, location, work experience, education. That's
the only file you need to touch for content changes.

Then drop your resume PDF into this same folder and name it exactly
`resume.pdf` (or change `resumeFile` in `data.js` to match your filename).

## 2. Preview it locally (using Python, since you already have it)

Open a terminal in this folder (in VS Code: Terminal → New Terminal)
and run:

```bash
python -m http.server 8000
```

Then open **http://localhost:8000** in your browser. Edit any file,
save, and refresh the browser to see changes — no restart needed
(refresh again if you edit `data.js` or `script.js`, since browsers
cache aggressively — use Ctrl+Shift+R / Cmd+Shift+R for a hard refresh).

Press `Ctrl+C` in the terminal to stop the server when you're done.

## 3. Host it for free — GitHub Pages

You already have a GitHub account (`Tejasgavale07`), so this is the
simplest free option — no separate signup, no credit card, custom
domain support later if you want it.

**Steps:**

1. Create a new repository on GitHub. Recommended name:
   `Tejasgavale07.github.io` (using this exact name gives you the
   cleanest URL: `https://tejasgavale07.github.io`). If you'd rather
   keep it under a different name like `portfolio`, that's fine too —
   your site will just live at `https://tejasgavale07.github.io/portfolio`.
2. Push this folder to that repository. In this folder's terminal:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Tejasgavale07/Tejasgavale07.github.io.git
   git push -u origin main
   ```

   (If `git` isn't installed, download it from git-scm.com first, or
   just upload the files through the GitHub web UI: repo → "Add file"
   → "Upload files".)
3. On GitHub: go to your repo → **Settings** → **Pages** (left
   sidebar) → under "Build and deployment", set **Source** to
   "Deploy from a branch" → Branch: `main`, folder `/ (root)` → **Save**.
4. Wait 1–2 minutes. GitHub gives you a live URL at the top of that
   same Pages settings screen. Visit it — your portfolio is live.
5. Any time you edit `data.js` (new job, updated resume, etc.), just
   `git add . && git commit -m "update" && git push` again — the live
   site updates automatically within a minute.

## Notes for recruiters reading the code

- The hero's "reconciliation" widget animates numbers into a matched
  state on load — a nod to the BFS Reconciliation Tool project below it.
- Content and design are fully decoupled (`data.js` vs everything
  else), so updating experience/projects never touches markup or styles.
- Respects `prefers-reduced-motion`; layout is responsive down to
  mobile widths.

# Soham Ghosh — personal academic website

Static site (plain HTML and CSS, no build step) for GitHub Pages.

## Pages

| File | Contents |
| --- | --- |
| `index.html` | About, research interests, publications and preprints |
| `talks.html` | Invited talks, conferences and workshops |
| `teaching.html` | Teaching record (TA and grading), mentoring and outreach, refereeing |
| `404.html` | Not-found page served by GitHub Pages |
| `assets/style.css` | All styling (one light theme; fonts from Google Fonts with system fallbacks) |
| `assets/favicon.svg` | Browser-tab icon |
| `files/Soham_Ghosh_CV.pdf` | The CV linked from every page |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are (no Jekyll build) |

## Preview locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>. The two tabs link to each other with relative paths, so the
site works from any folder, as a user site, or as a project site.

## Routine updates

- **Photo.** Save a portrait as `assets/photo.jpg` (roughly 4:5, at least 400 px wide). The
  sidebar shows it automatically and hides the slot when the file is absent.
- **CV.** Replace `files/Soham_Ghosh_CV.pdf` and update the two "updated October 2026" strings
  (sidebar and About paragraph) plus the footer in both HTML files.
- **Papers.** Add a new `<li class="pub">` block at the top of the `<ol class="pubs">` list in
  `index.html`, numbered one higher than the current first entry.
- **Talks, conferences, courses.** Each is a plain list item (`talks.html`) or table row
  (`teaching.html`); copy an existing one and edit it. Lists are kept in reverse chronological order.

## Publishing (the site is not live yet)

GitHub Pages is intentionally not enabled, so nothing is public until you turn it on.

1. Review the site (locally, or via the preview link shared in the Claude session).
2. Merge the `claude/wonderful-hypatia-9jp1y2` branch into `main`.
3. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, pick `main`
   and the `/ (root)` folder, and save. The site appears a minute or two later.

### Getting the address `soham-ghosh.github.io`

A GitHub *user site* is always served at `<username>.github.io`, from a repository with exactly
that name. The account is currently `Gsoham13`, so to use `soham-ghosh.github.io`:

1. Rename the GitHub account to `soham-ghosh` (**Settings → Account → Change username**), if
   that username is still available.
2. Rename this repository to `soham-ghosh.github.io` (**Settings → General → Repository name**).
3. Enable Pages as above.

Until the repository name matches `<username>.github.io`, GitHub treats it as a *project
site* and would serve it at `https://<username>.github.io/<repository-name>/` instead.

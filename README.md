# Yixiao Portfolio Site

Portfolio site for Yixiao Peng, built with Next.js, TypeScript, and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

The project is configured for static export, so production files are generated in `out/`.

## GitHub Pages Deployment

Push to the `main` branch. GitHub Actions will build the site and deploy `out/` to GitHub Pages.

After the first push, open the repository on GitHub and check:

1. `Settings -> Pages`
2. `Build and deployment`
3. Source should be `GitHub Actions`

# Portfolio App

Personal one-page portfolio built with:

- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/app/page.tsx`: Main page sections and layout
- `src/components/`: Reusable UI components
- `src/data/profile.ts`: Personal profile, education, work experience
- `src/data/skills.ts`: Skills data (dynamic)
- `src/data/projects.ts`: Projects data (dynamic)
- `public/`: Static files (images, CV PDF)

## Easy Content Updates (No Major Refactor Needed)

For most updates, only edit data files:

- Update bio/contact/education/experience in `src/data/profile.ts`
- Add/edit skills in `src/data/skills.ts`
- Add/edit projects in `src/data/projects.ts`
- Replace assets in `public/` (e.g., profile image, CV PDF)

Then run:

```bash
npm run build
```

If build succeeds, commit and push.

## Deploy to Vercel (GitHub Auto Deploy)

1. Go to [Vercel New Project](https://vercel.com/new)
2. Import your GitHub repository
3. If prompted, set **Root Directory** to `portfolio-app` (only if your repo root is the parent folder)
4. Vercel should auto-detect Next.js settings
5. Click **Deploy**

### Recommended Vercel Project Settings

- **Production Branch**: `main`
- **Node.js Version**: 20.x
- **Auto Deploy**: Enabled

## Workflow for Future Changes

Use this flow every time:

1. Edit code/data locally
2. Test locally (`npm run dev`)
3. Verify build (`npm run build`)
4. Commit + push to GitHub
5. Vercel automatically creates:
   - Preview deployment for PR/branch
   - Production deployment for pushes to `main`

This setup keeps deployments simple and safe for continuous updates.

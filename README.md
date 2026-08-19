# Ron Jordan Personal Brand Website

An editorial personal-brand website for transformation advisory, executive guidance, and strategic planning. Built with Next.js, TypeScript, Tailwind CSS, Shadcn conventions, local MDX content, and Docker.

## Local development

1. Copy `.env.example` to `.env.local` and replace every placeholder value.
2. Run `pnpm install`.
3. Run `pnpm dev` and open `http://localhost:3000`.

## Content and brand assets

- Update contact, LinkedIn, and canonical URL values through the environment variables in `.env.example`. The approved Calendly URL is configured by default and can still be overridden with `NEXT_PUBLIC_CALENDLY_URL`.
- Replace the editorial monogram artwork in `components/portrait-placeholder.tsx` with an approved professional portrait before launch.
- Replace the reserved professional-background copy on the About page with Ron's approved biography, credentials, and milestones.
- Edit or add insight articles in `content/insights`. Each `.mdx` file requires `title`, `description`, `date`, `readTime`, and `category` frontmatter.

## Production

Run `pnpm build` followed by `pnpm start`, or build and run the included Docker image. The Docker image uses Next.js standalone output and exposes port 3000.

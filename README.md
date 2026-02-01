# L&N Shop – Next.js

**Next.js 14** (App Router) e-commerce landing page with React components and Bootstrap.

## What’s included

- **Layout**: Root layout with metadata, theme CSS, and scripts (Bootstrap, Popper, Feather icons).
- **Navbar**: React Bootstrap navbar with collapse and “Women” link.
- **Hero header**: Hero section with background image and taglines.
- **Header cards**: “For Her” / “For Him” image cards (A11, A11a).
- **Best Deals**: Product carousel (A11 variants with Khmer names and price).
- **Footer**: L&N Shop credit and social icons (Feather).

Assets (images, `theme.css`, vendors) are in `public/`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Deploy on Vercel

- **Build command**: `npm run build`
- **Output**: default (Next.js)
- **Install command**: `npm install`

No root directory override needed; the repo root is the Next.js app.

## Adding more sections

Create new components under `components/`, then import and render them in `app/page.tsx`. Use `react-bootstrap` for Carousel, Tabs, etc., and `next/image` for images under `public/assets/img/`.

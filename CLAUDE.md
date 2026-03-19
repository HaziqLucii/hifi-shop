# acoustic-treats — CLAUDE.md

## Environment
- Node.js lives at `/home/haziq/.local/share/nvm/v20.19.4/bin/` — prefix commands with `export PATH="/home/haziq/.local/share/nvm/v20.19.4/bin:$PATH"`
- Run builds with: `node node_modules/.bin/next build`
- Git: `HaziqLucii / haziqdluffy@gmail.com`

## Deployment
- Hosted on Vercel, GitHub repo: `HaziqLucii/hifi-shop`
- **Do NOT include `Co-Authored-By: Claude` in commits** — Vercel Hobby plan blocks deployments from unrecognised committer emails
- `next.config.js` has `unoptimized: true` — new external image domains still need adding to `remotePatterns`

## Assets
- All images stored on Vercel Blob: `https://kx2kaqlxinzax2dn.public.blob.vercel-storage.com/`
- Folder structure: `binaryabfuser/`, `diffuser/`, `absorptionpanel/`
- Homepage hero is still from `primacoustic.com` — replace when a real photo is available

## Design System — "Chamber of Sound"
- Dark acoustic theme; custom Tailwind tokens under `acoustic-*` (defined in `tailwind.config.ts`)
- Fonts: `font-display` = Cormorant Garamond, `font-body` = Outfit (CSS variables set in `app/layout.tsx`)
- Gold accent: `#b8953a` (`acoustic-gold`), background: `#080b0f` (`acoustic-black`)
- Shadcn CSS variables overridden in `app/globals.css @layer base` to match dark theme
- Section labels: `font-body text-[10px] tracking-[0.35em] uppercase text-acoustic-gold`
- Acoustic dot-grid texture: `className="acoustic-grid"` (defined in globals.css)
- Gold divider: `<div className="gold-rule" />`

## Business Context
- Marketing site for father's acoustic panels business — no backend, all inquiries via WhatsApp (+60197697886)
- 3 products: Binary Abfuser, Acoustic Diffuser, Absorption Soundproof Panel
- WhatsApp quote form logic lives in `app/request-quote/page.tsx` — preserve the message builder

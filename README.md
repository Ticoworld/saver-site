# $SAVER ON SOL ($SOS) Website

> Community-first meme & lifestyle token on Solana. Featuring Saver Dino the lifeguard.

---

## Overview

- **Brand:** Solana gradients, Saver Dino mascot, premium meme design
- **Loader:** Unique, animated loader with logo and Dino Morse code SOS
- **Performance:** Code splitting, lazy loading, shimmer fallbacks, optimized images
- **Accessibility:** ARIA roles, prefers-reduced-motion, keyboard navigation
- **SEO:** Meta tags, Open Graph, Twitter Card, favicon, semantic HTML

## Key Features

- Dynamic hero entry animation (Framer Motion)
- Single, branded loader (no duplicate loaders)
- Community, Story, Utilities, Tokenomics, How to Buy sections
- Pump.fun launch model

## SEO

SEO is implemented in `index.html`:
- Title, description, keywords, author
- Open Graph and Twitter Card meta tags
- Favicon and font preconnect

Update URLs and images as needed after deployment.

## Loader Customization

Loader is in `src/components/Loader.jsx`:
- Uses logo and inline Dino SVG for Morse code
- Edit SVG or styles for further branding

## Launch Links

Update launch links in `src/config/sos.js` after deployment:
- `contractAddress`
- `links.pumpFun`
- `links.dexscreener`
- `links.geckoTerminal`
- `links.solscan`

---

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

---

For questions or contributions, open an issue or PR.

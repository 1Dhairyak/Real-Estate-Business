# Marlowe & Co. — Real Estate Business Website

Static React + Vite + Tailwind site. No backend, no database — matches the project roadmap exactly.

## Run it locally

1. Open PowerShell in this folder.
2. `npm install`
3. `npm run dev`
4. Open the URL it prints (usually `http://localhost:5173`).

## Project structure

- `src/data/properties.json` — all 8 sample listings. Edit this file directly to add/change properties, no admin panel needed.
- `src/components/` — Navbar, Footer, SearchBar, PropertyCard, ServiceCard.
- `src/pages/` — Home, Properties, PropertyDetails, About, Services, Contact.

## Before going live

1. **Contact form**: open `src/pages/Contact.jsx` and replace `FORM_ENDPOINT` with your real Formspree (`https://formspree.io/f/your-form-id`) or Web3Forms endpoint.
2. **Property images**: currently pulling from Unsplash as placeholders. Swap the `images` arrays in `properties.json` for your own photos once you have them (drop files in `src/assets/` and reference with relative imports, or host them anywhere with a public URL).
3. **Copy**: business name is placeholder ("Marlowe & Co.") — search `Marlowe` across `src/` and replace with your real business name.

## Build for production

```
npm run build
```

Output goes to `dist/`. That `dist/` folder is what you upload to S3 per Phase 2 of the roadmap.

## Deploying (Phase 2, AWS)

1. Create the S3 bucket with static website hosting enabled.
2. Request an SSL cert in ACM — **must be `us-east-1`** for CloudFront to use it, even though your account is `ap-south-1`.
3. Create a CloudFront distribution pointing at the S3 bucket, attach the cert.
4. Add DNS records at your domain registrar pointing to the CloudFront distribution.
5. Set up a billing alarm (e.g. alert at $1) before going live — cheap insurance.

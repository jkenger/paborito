# Paborito

A responsive marketing website for a Philippine agribiotech company, built with Next.js, React, TypeScript, and Tailwind CSS. [View the live website](https://paborito.vercel.app/).

I designed and implemented the site independently, including its page structure, reusable UI components, product presentation, and contact flows.

## What is included

- Home, about, products, individual product, dealer, contact, privacy, and terms pages
- Shared navigation, product cards, forms, and responsive layout components
- Contact and partner application forms backed by Next.js route handlers and Resend
- Page metadata and content organized in `lib/content.ts`

Some product imagery, testimonials, marketplace links, and contact details are still placeholders in the repository. They should be replaced with approved client content before those parts are presented as complete.

## Run locally

1. Install dependencies with `npm install`.
2. Set `RESEND_API_KEY`, `EMAIL_FROM`, and `CONTACT_EMAIL` for the contact form. Set `PARTNER_EMAIL` if partner applications should use a different destination.
3. Start the site with `npm run dev`.

The pages render without email credentials, but form delivery requires them.

## Checks

```bash
npm run lint
npm run build
```

The repository does not currently contain an automated test suite. See `app/` for routes, `components/` for reusable UI, and `lib/content.ts` for page content.

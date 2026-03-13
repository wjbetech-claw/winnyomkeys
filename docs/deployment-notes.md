# Deployment notes

## Current assumptions

- production domain is assumed to be `https://winnyomkeys.com`
- the site is a static-friendly Next.js landing page
- deployment target has not been formally documented yet

## Before launch

Confirm and update:

- real production domain
- real inquiry/contact channel
- final metadata copy
- social preview assets if desired
- any legal/privacy requirements

## Deployment requirements

- Node version compatible with `.nvmrc`
- install dependencies with `npm ci`
- run `npm run validate`
- deploy only from validated branch or merged `main`

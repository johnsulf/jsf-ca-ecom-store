# JSF CA Ecom Store

This is a simple eCommerce demo built with **React**, **TypeScript** and **Vite**. It fetches product data from the [Noroff online shop API](https://v2.api.noroff.dev/online-shop) and demonstrates routing, state management and form handling.

## Features

- Product listing with search
- Detailed product pages including rating and reviews
- Shopping cart stored in `localStorage`
- Checkout confirmation page
- Contact form with client side validation
- Light/dark theme toggle

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) by default.

## Building for production

```bash
npm run build
```

You can preview the production build locally with:

```bash
npm run preview
```

## Linting

Run ESLint to check the code style:

```bash
npm run lint
```

## Project structure

- `src/api` – API helpers
- `src/components` – reusable UI components
- `src/layout` – page layout with header, footer and breadcrumbs
- `src/pages` – React Router pages
- `src/providers` – context providers (theme and cart)

## License

This project is provided for educational purposes and has no specific license.

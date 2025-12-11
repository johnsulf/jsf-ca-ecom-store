# JSF CA Ecom Store

![Add a project screenshot here](public/assets/jsf.png)

A full-stack-ready eCommerce demo showcasing product discovery, cart management, and checkout flows using the Noroff Online Shop API.

## Description

This project explores how to build a modern storefront experience with React, TypeScript, and Vite while keeping the codebase approachable for coursework.

- Fetches live catalog data from the [Noroff Online Shop API](https://v2.api.noroff.dev/online-shop)
- Demonstrates client-side routing, optimistic UI, and form validation
- Persists cart state and theme preferences locally for returning visitors

## Built With

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## Getting Started

### Installing

Clone the repository and install dependencies:

```bash
git clone https://github.com/johnsulf/jsf-ca-ecom-store.git
cd jsf-ca-ecom-store
npm install
```

### Running

Start a local development server:

```bash
npm run dev
```

Additional scripts:

```bash
npm run build   # create a production bundle
npm run preview # preview the production build locally
npm run lint    # run ESLint checks
npm test        # execute unit tests
```

## Contributing

Fork the project, create a feature branch, and open a pull request describing your changes. Please run `npm run lint` and `npm test` before submitting to keep the codebase consistent and stable.

## Contact

- GitHub: [@johnsulf](https://github.com/johnsulf)

## License

This project is provided for educational purposes and has no specific license.

## Acknowledgments

- Noroff for the Online Shop API
- The shadcn/ui team for the component library foundation

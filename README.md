# Mpa pages template

- Rsbuild + Rsdoctor + tailwindcss + React + Typescript

## Main file and directory structure

```bash
*.
├── src
│   ├── assets                  // Public static resources (images, fonts, etc.)
│   ├── components
│   │   └── ui                  // Shadcn UI
│   ├── hooks                   // Public hooks
│   ├── pages
│   │   ├── hello-world         // page1
│   │   │   ├── App.tsx
│   │   │   ├── index.html      // HTML Template(Optional)
│   │   │   ├── index.tsx
│   │   │   └── locales         // i18n
│   │   │       ├── en.json
│   │   │       ├── fr.json
│   │   │       └── index.ts
│   │   └── hello-world2        // page2
│   │       ├── App.tsx
│   │       ├── index.tsx
│   │       └── locales
│   │           ├── en.json
│   │           ├── fr.json
│   │           └── index.ts
│   ├── styles
│   ├── template                // Public HTML template
│   └── utils
├── components.json
└── rsbuild.config.ts

......

```

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get started

Start the dev server, and the app will be available at [http://localhost:8080](http://localhost:8080).

```bash
PAGE="hello-world" pnpm dev
```

Build the app for production:

```bash
PAGE="hello-world" pnpm build:test
PAGE="hello-world" pnpm build:prod
```

# Multibrand Product Portal

This is a scalable, modular monorepo application built with **Next.js 16**, **React 19**, and **Turborepo**. It is designed to support multiple white-label brands (e.g., `green`, `red`) sharing a common codebase while maintaining distinct styles and business logic.

## Demo

- Green: https://multibrand-product-portal-green.vercel.app/
- Red: https://multibrand-product-portal-red.vercel.app/

## 📋 Prerequisites

To run this project, ensure your environment matches the specific versions defined in `package.json` engines.

*   **Node.js**: v24+ (LTS)
*   **pnpm**: v10.26.0

## 🚀 Getting Started

### 1. Install Dependencies
Install all packages across the workspace:

```bash
pnpm install
```

### 2. Environment Setup
Configure environment variables for the applications. You need to create `.env` files for each app based on the provided example.

```bash
# Example for the 'green' app
cp apps/green/.env.example apps/green/.env

# Repeat for other apps (e.g., 'red')
cp apps/red/.env.example apps/red/.env
```

*Open the `.env` files and fill in the required values, e.g.:*

```dotenv
NEXT_PUBLIC_API_URL=https://dummyjson.com
```

## 🛠️ Development

You can run applications individually or all at once.

| Action | Command | Description |
| :--- | :--- | :--- |
| **Run All Apps** | `pnpm dev` | Starts all applications in parallel |
| **Run Specific App** | `pnpm dev --filter=green` | Starts only the `green` app |
| **Run Another App** | `pnpm dev --filter=red` | Starts only the `red` app |

## 📦 Production

To build and start the applications in production mode:

```bash
# 1. Build all apps and packages
pnpm build

# 2. Start a specific app (e.g., green)
pnpm start --filter=green
```

## 🧩 Package Management

This monorepo uses **pnpm workspaces** and the **Catalogs** feature (defined in `pnpm-workspace.yaml`) for dependency version management.

### Adding a dependency
To add a library (e.g., `ky`) to a shared package:

```bash
pnpm add ky --filter=@repo/shared
```

## ✨ Scaffolding (New Brand)

There is a script to quickly bootstrap a new brand application based on existing templates.

```bash
pnpm run workspace:create
```
*Follow the interactive prompts to generate a new application.*

## Apps and Packages

- `green`: a [Next.js](https://nextjs.org/) app
- `red`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a dumb component library shared by both applications
- `@repo/widgets`: composite shared sections with customizable business logic
- `@repo/shared`: shared non-business code
- `@repo/biome-config`: `biome` configurations
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/tailwind-config`: `tailwind` config and theme definitions

## Architecture Decisions & Features

### 1. Customization Strategy & DRY Principle
To adhere to the DRY principle while meeting the strict requirement for distinct brand identities, I implemented a multi-layered customization strategy. This project intentionally combines several approaches to demonstrate the flexibility of the architecture:

*   **Global Theming:** Brand colors and typography are controlled via CSS variables in `apps/[brand]/config/theme.css`.
*   **Component Styling:** Specific component overrides are handled via modular CSS, e.g., `apps/[brand]/config/components/product-card.css`.
*   **Static Configuration:** Feature flags and structural constants are defined in `apps/[brand]/config/brandConfig.ts`.
*   **Logic Injection (Dependency Injection):** For deep customization (modifying business logic or swapping entire UI slots), I implemented a Provider pattern. See `apps/red/app/[market]/products/providers.tsx`. This allows the "Red" brand to inject different behavior into shared components without polluting the shared code with `if/else` statements.

> *Trade-off Note:* for demo purposes, the project utilizes a mix of strategies to showcase the full range of possibilities.

### 2. Multi-Market Support
The application supports seamless routing for different markets (e.g., `/en`, `/ca`).
*   Implemented a `MarketLink` component (Client Side) that automatically prefixes internal links with the current market locale. This ensures developers don't need to manually concatenate URL strings, reducing routing errors.

### 3. Caching & Next.js 16 Features (PPR)
I leveraged the latest Next.js 16 capabilities for performance optimization:
*   **Partial Prerendering (PPR):** The dynamic product list (`packages/widgets/src/product-list/ProductListAsync.tsx`) uses [**Cache Components**](https://nextjs.org/docs/app/getting-started/cache-components) semantics.
*   **Revalidation:** The product list is configured to revalidate approximately every 5 minutes. You will see a log message in the server console confirming the data refresh.
*   **Evolution of approach:** To demonstrate mastery of different Next.js generations, I initially implemented standard **ISR**. You can view this approach in the git history at commit `0fa4005` ("feat: initial ISR implementation"). The final version uses the newer Cache API.

### 4. SEO & Metadata
Implemented a robust metadata generation strategy:
*   Dynamic generation of Title and Description for both Product List and Product Detail pages.
*   The metadata generator is aware of the brand context, allowing for brand-specific SEO titles if required (as well as i18n).

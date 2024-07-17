# Purpose

This repository is to create a UI for DIGiTRAD Support Portal

## Source Tech Stack

This is a [React](https://reactjs.org) + [Typescript](https://www.typescriptlang.org) + [Vite](https://vitejs.dev/)

## What's inside?

- [ReactJS](https://reactjs.org)
- [JavaScript](https://www.javascript.com)
- [Prettier](https://prettier.io)
- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org)
- [Playwright](https://playwright.dev/)
  \+ other smaller dependencies

## Source Folder Structure
    src
    ├── assets                  # Components styling folder and resource (ex: images, icons,...)
    ├── test                    # Test config and utils for testing
    ├── utility                 # Common hooks and utils files for components
    ├── stories                 # Storybook example, may removed in the future
    ├── api                     # Function related to API
    ├── configs                 # Theme Config files
    ├── locale                  # Language string files and i18n config
    ├── router                  # Routing related files and routing config
    ├── tests                   # Location containing the test files
    └── views                   # Main display components, pages, layout
         ├── components         # Shared components between page (may need to sent to common ui source)
         ├── layout             # Main layout related to routing config to render page layout
         └── pages              # Page or Flow components, also include saga and reducers for each main flows


## Get started

1. Clone this project.

   ```bash
   git clone git@github.com:standage-jp/digitrad-support-web.git
   ```

2. Access the project directory.

   ```bash
   cd digitrad-support-web
   ```

3. Install dependencies.

   Before installing dependencies, you need to set up NPM with your authentication token for Github Packages (used for shared internal packages).

   ```bash
   yarn install
   ```

4. Serve with hot reload at http://localhost:3000.

   ```bash
   yarn start
   ```
5. Run e2e commands

   ```bash
   yarn e2e:test:ui
   ```

### Build commands

- This build command will build this source

```bash
yarn build
```

### License

# Ember & Oak — Restaurant Page

A tabbed restaurant website built with vanilla JavaScript and Webpack.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npx webpack serve
```

Then open http://localhost:8080 in your browser.

Build for production:

```bash
npx webpack
```

Output goes to the `dist/` folder.

## How It Works

- Each tab (Home, Menu, About) is a separate JS module that exports a function
- The function clears `#content` and rebuilds the page using DOM methods only — no innerHTML on the content div
- Tab switching logic lives in `index.js` — it listens for nav button clicks and calls the correct module
- CSS is imported directly into JS and handled by `css-loader` and `style-loader`
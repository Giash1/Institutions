# Copilot Instructions for Institutions Project

## Architecture Overview

- **Type:** Multi-Page Application (MPA) served by a Node.js/Express backend.
- **Frontend:** Vanilla HTML, CSS, and JavaScript. No build tools (Webpack, Vite, etc.) are used.
- **Backend:** Simple Express server (`src/server.js`) that serves the `public/` directory as static files.
- **Component System:** "Components" (like `nav`, `footer`, `heading`) are standalone HTML fragments loaded at runtime via `fetch` injection.

## Project Structure

- **`src/`**: Backend code.
  - `server.js`: Entry point.
  - `app.js`: Express app configuration.
- **`public/`**: Frontend code.
  - Organized by feature/page (e.g., `aboutUs/`, `contactUs/`, `nav/`).
  - **Naming Convention:** CamelCase folders matching the feature name.
  - **File Pattern:** Each folder typically contains:
    - `featureName.html`: The HTML structure.
    - `featureName.css`: Styles specific to that feature.
    - `featureName.js`: Logic for that feature, including loading shared components.

## Key Patterns & Conventions

### 1. Component Loading (Runtime Injection)

Shared components (`nav`, `footer`, `heading`) are not bundled. They are injected at runtime by the page's JavaScript file.

- **HTML:** Pages include placeholder `<div>` elements:
  ```html
  <div id="heading"></div>
  <div id="nav"></div>
  <div id="footer"></div>
  ```
- **JavaScript:** The page's `.js` file defines a `loadHTML` function to fetch and inject these components.
  - **Important:** You must use correct **relative paths** (e.g., `../../nav/nav.html`) based on the current page's depth.
  - **Example:**
    ```javascript
    loadHTML(
      "nav",
      "../../nav/nav.html",
      "../../nav/nav.css",
      "../../nav/nav.js"
    );
    ```

### 2. Localization

Localization is handled manually in JavaScript by swapping text content based on element IDs.

- **Pattern:**
  ```javascript
  const elements = {
    "element-id": { en: "English Text", bn: "Bengali Text" },
  };
  // Logic to iterate and update textContent
  ```

### 3. Navigation

- Links in `nav/nav.html` are hardcoded relative paths to other HTML files (e.g., `../../resources/admission/admission.html`).
- When adding a new page, ensure you update `nav/nav.html` with the correct relative link.

## Developer Workflow

- **Run Server:** `node src/server.js`
- **Port:** Defaults to `3001`.
- **Development:** Changes to `public/` files are reflected on page refresh (no hot reload).
- **New Page Creation:**
  1. Create folder `public/newFeature/`.
  2. Create `newFeature.html`, `newFeature.css`, `newFeature.js`.
  3. In `newFeature.html`, add placeholders for shared components.
  4. In `newFeature.js`, implement `loadHTML` to inject `nav`, `footer`, etc.
  5. Link the new page in `public/nav/nav.html`.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express (Backend)
- **Frontend:** Vanilla JS, HTML5, CSS3


## `createElement`
- **Source:** Comes from the core React library, which can be included via a CDN or installed as a package.
- **Arguments:** Takes three arguments:
  1. The name of the tag (e.g., `"h1"`).
  2. An object representing attributes (e.g., `className`, `id`).
  3. The children (content) of the element. If there is more than one child, they must be passed as an array.
- **Returns:** A React element, which is a JavaScript object representation of the DOM element.
- **Syntax Example:**
  ```js
  const heading1 = React.createElement("h1", { className: "heading" }, "I am good");

## `createRoot`
- **Source:** Comes from the ReactDOM library, which can be included via a CDN or installed as a package.
- **Purpose:** Creates or assigns a root inside a React application.
- **Syntax Example:**
  ```js
  const root = ReactDOM.createRoot(document.getElementById("root"));

## `render`
- **Function:** The `render` function takes a React element (JavaScript object) and converts it into HTML that the browser can understand, rendering it inside the root of the React application.
- **Syntax Example:**
  ```js
  root.render(reactElement);

## How React Makes Changes in `index.html`
- **Content Replacement:** React only replaces content inside the root `div` (or the `div` where React is rendered).
- **Multiple Roots:** You can create more than one React root inside your application. This flexibility is one reason why React is considered a library rather than a full-fledged framework, as it can be applied to a small portion of a page and work independently within that portion.
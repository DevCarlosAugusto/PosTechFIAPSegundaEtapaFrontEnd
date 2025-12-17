import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --error: #cc0000;
    --black: #000000;
    --black-01: #333;
    --white: #fff;
    --white-01: #ccc;
    --text-muted: #6b7280;
    
    --bg-body: #f4f4f5;
    --bg-card: #ffffff;
    --primary: #3b82f6;
    --primary-hover: #2563eb;
    --accent: #f97316;
    --text-main: #111827;
    --border-soft: #e5e7eb;
    --radius-lg: 12px;
    --shadow-soft: 0 10px 25px rgba(15, 23, 42, 0.08);
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: var(--bg-body);
    color: var(--text-main);
  }

  a {
    color: inherit;
  }

  h1, h2, h3 {
    margin-top: 0;
    font-weight: 700;
  }

  label {
    font-size: 0.9rem;
    color: var(--text-muted);
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    ///* Use a large inset box-shadow to cover the entire input field with a solid color */
    //-webkit-box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0) inset !important;
    //
    ///* Ensure the text color remains visible */
    //-webkit-text-fill-color: rgba(255, 255, 255, 0) !important;
    //
    ///* Optional: Add a transition delay to prevent the default color from briefly showing */
    //transition: background-color 5000s ease-in-out 0s;
  }
`;

export default GlobalStyle;

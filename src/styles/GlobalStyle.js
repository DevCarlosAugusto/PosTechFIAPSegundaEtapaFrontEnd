import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-body: #f4f4f5;
    --bg-card: #ffffff;
    --primary: #3b82f6;
    --primary-hover: #2563eb;
    --accent: #f97316;
    --text-main: #111827;
    --text-muted: #6b7280;
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
`;

export default GlobalStyle;

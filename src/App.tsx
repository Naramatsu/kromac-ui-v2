import { useState } from "react";
import { Button } from "./components/Button";
import "./styles/index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "2rem", fontFamily: "var(--kromac-font-family)" }}>
      <h1>Kromac UI v2 - Style Framework</h1>
      <p>A React TypeScript component library built with Vite.</p>

      <div style={{ marginBottom: "2rem" }}>
        <h2>Button Component Examples</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          <Button variant="primary" onClick={() => setCount(count + 1)}>
            Primary Button (Count: {count})
          </Button>
          <Button shape="neon">Neon Button</Button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button disabled>Disabled</Button>
          <Button variant="success" disabled>
            Disabled Success
          </Button>
          <Button shape="neon" disabled>
            Disabled Neon
          </Button>
        </div>
      </div>

      <div>
        <h2>Getting Started</h2>
        <p>Install the package:</p>
        <code
          style={{
            background: "#f5f5f5",
            padding: "0.5rem",
            borderRadius: "4px",
            display: "block",
            marginBottom: "1rem",
          }}
        >
          npm install kromac-ui-v2
        </code>
        <p>Import components and styles:</p>
        <code
          style={{
            background: "#f5f5f5",
            padding: "0.5rem",
            borderRadius: "4px",
            display: "block",
          }}
        >
          import {"{ Button }"} from 'kromac-ui-v2';
          <br />
          import 'kromac-ui-v2/styles';
        </code>
      </div>
    </div>
  );
}

export default App;

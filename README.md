# Kromac UI v2

A modern React TypeScript component library built with Vite, designed for publishing as a style framework on npm.

## Features

- 🚀 Built with Vite for fast development and building
- 📦 TypeScript support with full type definitions
- 🎨 CSS-in-CSS approach with CSS variables for theming
- 🔧 Optimized for tree-shaking
- 📝 Comprehensive TypeScript interfaces
- 🌟 Modern React patterns and best practices

## Installation

```bash
npm install kromac-ui-v2
```

## Usage

### Import Components

```typescript
import { Button } from "kromac-ui-v2";
import "kromac-ui-v2/styles";
```

### Button Component

```typescript
import { Button } from "kromac-ui-v2";

function MyComponent() {
  return (
    <div>
      <Button variant="primary" size="medium">
        Click me!
      </Button>
      <Button variant="success" size="large">
        Success
      </Button>
      <Button variant="outline" size="small">
        Outline
      </Button>
    </div>
  );
}
```

## Components

### Button

The Button component supports various variants and sizes:

**Props:**

- `variant`: 'primary' | 'success' | 'outline' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- All standard HTML button attributes

## Theming

The library uses CSS variables for easy theming:

```css
:root {
  --kromac-primary-color: #2e86c1;
  --kromac-success-color: #28b463;
  --kromac-outline-color: #007bff;
  --kromac-text-color: #212529;
  --kromac-border-radius: 0.375rem;
  --kromac-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  --kromac-transition: all 0.2s ease-in-out;
}
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## Publishing

```bash
# Build the library
npm run build

# Publish to npm
npm publish
```

## License

MIT

## Author

Jonathan Narvaez
# kromac-ui-v2

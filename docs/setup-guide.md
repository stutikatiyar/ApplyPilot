# Tailwind CSS Configuration

## Installation

```bash
npm install tailwindcss @tailwindcss/vite
```

## Vite Configuration

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
```

## CSS Import

Inside:

src/index.css

```css
@import "tailwindcss";
```

## Verification

Create a temporary component:

```tsx
<div className="bg-red-500 text-white">
  Tailwind Working
</div>
```

If the red styling appears, Tailwind is configured successfully.

```
```

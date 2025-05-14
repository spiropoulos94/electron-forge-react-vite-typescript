# Electron Forge React Vite TypeScript Template

A modern desktop application template using Electron Forge with React, Vite, and TypeScript.

## Features

- ⚡️ **Vite** - Fast development and building
- 🔋 **Electron Forge** - Easy packaging and distribution
- ⚛️ **React** - Component-based UI
- 📝 **TypeScript** - Type safety
- 📁 **Path Aliases** - Clean imports using `@/`, `@ui/`, and `@electron/`

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [this-repo]
cd electron-forge-react-vite-typescript

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm start
```

### Building

```bash
# Package the app
npm run package

# Make distributable
npm run make
```

## Project Structure

```
electron-forge-react-vite-typescript/
├── src/
│   ├── electron/  # Electron main process code
│   └── ui/        # React frontend code
├── vite.main.config.ts      # Vite config for main process
├── vite.preload.config.ts   # Vite config for preload scripts
├── vite.renderer.config.ts  # Vite config for renderer process
└── tsconfig.json            # TypeScript configuration
```

## Path Aliases

This project uses path aliases for cleaner imports:

- `@/` - Points to the `src` directory
- `@ui/` - Points to the `src/ui` directory
- `@electron/` - Points to the `src/electron` directory

Example:

```typescript
// Instead of this
import FakeComponent from "../electron/FakeComponent";

// Use this
import FakeComponent from "@electron/FakeComponent";
```

## License

[MIT](LICENSE)

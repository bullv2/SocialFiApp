# SocialFi App

A React Native social media application with Web3 integration.

## Development Workflow

### Branch Structure

- `main` - Production branch
- `dev` - Development branch
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches
- `release/*` - Release branches

### Getting Started

#### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

#### Installation

1. Clone the repository:
```bash
git clone https://github.com/bullv2/SocialFiApp.git
cd SocialFiApp
```

2. Switch to development branch:
```bash
git checkout dev
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

### Running the App

- For iOS:
```bash
npm run ios
# or
yarn ios
```

- For Android:
```bash
npm run android
# or
yarn android
```

- For Web:
```bash
npm run web
# or
yarn web
```

## Project Structure

```
SocialFiApp/
├── assets/           # Static assets (images, fonts, etc.)
├── src/             # Source code
│   ├── components/  # Reusable components
│   ├── screens/     # Screen components
│   ├── navigation/  # Navigation configuration
│   ├── services/    # API and other services
│   ├── utils/       # Utility functions
│   └── types/       # TypeScript type definitions
├── App.tsx          # Root component
└── package.json     # Project dependencies
```

## Development Guidelines

1. Always create feature branches from `dev`
2. Follow the naming convention for branches:
   - `feature/feature-name`
   - `bugfix/bug-name`
   - `release/version-number`
3. Write meaningful commit messages
4. Create pull requests to merge into `dev`
5. Keep `dev` branch up to date with `main`
6. Use TypeScript for type safety
7. Follow the existing code style
8. Write tests for new features

## License

 
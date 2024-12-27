# MUI v6 Theme Creator

A powerful visual theme creation tool for Material-UI (MUI) v6, built with React + TypeScript + Vite.

## 🌟 Features

- **Visual Theme Editor**

  - Customize colors, typography, spacing, and more
  - Real-time component preview
  - Light/Dark mode support
  - Preset themes available

- **Component Preview**
  - Live preview of MUI components
  - All major component categories:
    - Buttons & Controls
    - Navigation
    - Forms & Inputs
    - Feedback & Progress
    - Data Display
    - Typography & Text
  - Instant theme application

- **Animation Preview**
  - Test your theme with animated components
  - Visualize transitions and effects
  - Ensure consistent motion design

- **Export Options**
  - JSON format
  - TypeScript configuration
  - JavaScript configuration

## 🚀 Live Demo

Try it out: [MUI Theme Creator](https://muiv6-theme-creator.web.app/) or visit our [Live App](https://muiv6-theme-creator.web.app/)

## 🛠️ Development Setup

This project uses Vite with HMR and ESLint rules. To get started:

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file with your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## 📝 ESLint Configuration

For production applications, we recommend enabling type-aware lint rules:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

See the [ESLint documentation](https://eslint.org/) for more configuration options.

## 🛠️ Built With

- [React](https://reactjs.org/)
- [Material-UI v6](https://mui.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

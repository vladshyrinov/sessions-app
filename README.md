# Sessions App

A modern web application built with **React**, **Vite**, **Tailwind CSS**, and **Zustand**. This app is designed for efficient development and production builds, with automatic deployment to GitHub Pages. It includes features like a **dark/light theme toggle**, **session management**, and **responsive design**.

You can access the application here: [Sessions App](https://vladshyrinov.github.io/sessions-app/)

---

## Features

- **Dark/Light Theme Toggle**: Easily switch between dark and light modes for better user experience.
- **Session Management**: Create, view, and delete sessions with a simple and intuitive interface.
- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Fast Development Workflow**: Powered by Vite for lightning-fast builds and hot module replacement (HMR).
- **State Management**: Zustand is used for efficient and minimalistic state management.
- **Continuous Deployment**: Automatically deployed to GitHub Pages using GitHub Actions.

---

## Technologies used

- **React** with React Router for navigation
- **Tailwind CSS** for utility-first styling
- **Zustand** for state management
- **GitHub Actions** for Continuous Integration (CI) and Continuous Deployment (CD)
- Pre-configured testing with **Vitest**
- Code linting with **ESLint** and **Prettier**
- **Husky** for Git hooks

---

## How to Start

### 1. Clone the Repository

To get started with the project, clone the repository to your local machine:

```bash
git clone https://github.com/vladshyrinov/sessions-app.git
cd sessions-app
```

### 2. Install Dependencies

Once you’ve cloned the project, navigate to the project directory and install the necessary dependencies:

```bash
npm install
```

### 3. Run the Development Server

After installing the dependencies, start the development server with Vite. This will allow you to view the application in your browser while it is being developed.

```bash
npm run dev
```

The development server will start, and you can view the app by navigating to http://localhost:5175.

### 4. Build the Application

To build the application for production, run:

```bash
npm run build
```

This will compile and bundle your application using Vite’s production build pipeline, optimizing for fast load times.

### 5. Preview the Production Build

To preview your production build locally:

```bash
npm run preview
```

This will serve the production build, allowing you to test it as it would appear in a live environment.

### 6. Run Tests

The project uses Vitest for testing. You can run tests with the following command:

```bash
npm run test
```

If you want to watch the tests as you make changes:

```bash
npm run test:watch
```

---

## Why I Chose This Architecture and Libraries

### React

React is one of the most popular and flexible frameworks for building modern web applications.

It allows for the creation of reusable components, which makes the application more modular and easier to maintain.

With its efficient virtual DOM and component lifecycle, React provides optimal performance even in complex applications.

### Vite

Vite is an incredibly fast build tool that leverages native ES modules and modern JavaScript features. It’s optimized for development speed, allowing for lightning-fast hot module replacement (HMR).

Compared to traditional bundlers like Webpack, Vite significantly reduces build times, making the development experience more efficient.

### Tailwind CSS

Tailwind is a utility-first CSS framework that enables rapid development. So it was used for the speed reasons of styling the project.

### Zustand

Zustand is a small, fast, and easy-to-use state management library for React.

Unlike Redux, Zustand doesn’t require complex boilerplate code or action creators, making it simpler to use.

Zustand is ideal for this project because it provides a minimalistic approach to state management while still offering powerful features like subscription and persistence.

### Vitest

Vitest is a fast and lightweight testing framework that integrates well with Vite. It is similar to Jest but is optimized for Vite’s fast development workflow. I did a couple tests examples in the project.

### ESLint & Prettier

ESLint helps catch errors in the codebase and enforce best practices, reducing the likelihood of bugs and making the codebase more maintainable.

Prettier automatically formats the code to ensure consistency across the project.

Using both together helps maintain code quality and consistency throughout the development process.

### Husky & Lint-Staged

Husky is used to set up Git hooks that enforce quality standards before commits and pushes.

Lint-staged ensures that only the staged files are linted, formatted, and tested, improving performance and ensuring that only the necessary changes are validated.

### GitHub Actions

GitHub Actions automates the CI/CD pipeline, making it easier to build, test, and deploy the application.

The GitHub Actions configuration ensures that each push to the main branch triggers a build and deployment process to GitHub Pages.

This automation reduces the risk of human error and ensures that deployments are consistent and repeatable.


# Snigdha OS Web Dev

Welcome to the Snigdha OS Web Dev repository! This repository contains the source code, components, and resources used for building and maintaining the official website for Snigdha OS.

[![Netlify Status](https://api.netlify.com/api/v1/badges/03563b4f-142a-4d7d-8d97-ecfff7b87b29/deploy-status)](https://app.netlify.com/sites/snigdhaos/deploys)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Developers](#developers)
- [Development Guide](#development-guide)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Snigdha OS Web Dev repository powers the official Snigdha OS website. It includes various web development components, styles, and scripts necessary for the website's functionality. The website is designed to be clean, lightweight, and user-friendly, aligning with the philosophy of Snigdha OS.

## Features

- **Responsive Design**: The website is fully responsive and works across various devices and screen sizes.
- **User Registration & Authentication**: Integrated with the Snigdha OS user system for registration and authentication.
- **Region-based Downloads**: Allows users to select regional mirrors for downloading Snigdha OS.
- **Customizable UI**: Built with flexibility in mind for future enhancements and easy theming.
- **SEO Optimization**: The website is optimized for search engines to ensure better discoverability.

## Technologies Used

This project utilizes a range of modern web technologies to create a seamless and performant experience:

- **React.js**: A JavaScript library for building user interfaces, allowing for reusable components and a fast development workflow.
- **Node.js**: A runtime environment for executing JavaScript on the server-side.
- **Express.js**: A minimal web framework for Node.js used for backend API routes.
- **Redux**: A state management library to handle the application's state in a predictable way.
- **CSS3**: For styling the website with modern layout techniques (Flexbox, Grid).
- **Sass**: A CSS preprocessor to manage complex stylesheets and make the development process more efficient.
- **Webpack**: A module bundler for JavaScript and other assets, ensuring optimal performance and organization.
- **Jest**: A testing framework used for running unit and integration tests.
- **ESLint**: A tool for identifying and fixing issues in JavaScript code to ensure consistency and adherence to coding standards.

## Developers

Below is the list of developers contributing to the Snigdha OS Web Dev:

- **eshanized** - Lead Developer, Web Architect

If you would like to contribute or join the team, feel free to reach out!

## Development Guide

### Prerequisites

To get started with development, you need:

- **Node.js** and **pnpm** installed on your local machine.
- A modern web browser (Chrome, Firefox, etc.) for testing and debugging.
- A code editor (VSCode, Sublime Text, etc.).
- Familiarity with React.js, JavaScript, CSS, and Git.

### Setting Up the Development Environment

1. Clone the repository:
   ```bash
   git clone https://github.com/Snigdha-OS/snigdhaos-web-dev.git
   cd snigdhaos-web-dev
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm start
   ```

   This will start the development server at `http://localhost:3000`. Any changes made to the code will be reflected immediately.

### Folder Structure

- `src/`: Contains all the source code for the frontend.
- `public/`: Static files such as images, icons, and fonts.
- `components/`: Reusable components like headers, footers, and forms.
- `pages/`: Individual pages of the website like home, about, and download pages.
- `styles/`: CSS files for styling the website.

### Contribution Guidelines

- **Fork the repository** and clone your fork locally.
- Create a new branch for each feature or bug fix:
  ```bash
  git checkout -b feature-name
  ```
- Make your changes, commit them with clear and descriptive commit messages.
- Push your changes to your fork and create a pull request to the `main` branch.

### Code Style and Best Practices

- Follow a consistent style guide for JavaScript and CSS.
- Use meaningful variable names, and avoid long functions.
- Comment complex logic to explain the reasoning behind it.
- Use `pnpm run lint` to check for code style issues before committing.

### Testing

To test changes locally, run:
```bash
pnpm run test
```

This will run the Jest test suite for any components or functions that have been set up for testing.

## Contributing

We welcome contributions from everyone! If you'd like to contribute to Snigdha OS Web Dev, please follow these steps:

1. Fork the repository.
2. Clone your fork locally and create a new branch.
3. Make your changes and test them.
4. Create a pull request with a clear description of your changes.

If you have any ideas or suggestions, please feel free to open an issue or start a discussion.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

<div align="center">Thanks for contributing to Snigdha OS Web Dev!</div>

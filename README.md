# Finnovation New Website

This repository contains the source code for the Finnovation New Website, a React-based project built with Vite. This README provides details on how to set up and run the project locally.
Test
## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project Locally](#running-the-project-locally)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js) or **yarn**
- A modern web browser

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aliz1369/finnovation-website.git
   cd finnovation-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # Or, if you use yarn
   yarn install
   ```

## Running the Project Locally

1. Start the development server:
   ```bash
   npm run dev
   # Or, if you use yarn
   yarn dev
   ```

2. Open your web browser and navigate to:
   ```
   http://localhost:5173
   ```

   The development server will automatically reload the app when you make changes to the code.

## Scripts

The following scripts are available in the project:

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Serves the production build locally.
- **`npm run lint`**: Runs linting to check for code style and errors.

## Folder Structure

```plaintext
finnovation-website/
├── public/          # Static assets
├── src/             # Source code
│   ├── api/         # Communicate with server
│   ├── app/         # Redux
│   ├── components/  # Reusable components
│   ├── layouts/     # Layouts
│   ├── routes/      # Routes components
│   ├── pages/       # Page components
│   ├── styles/      # Global and modular styles
│   ├── App.tsx      # Root component
│   ├── main.tsx     # Application entry point
├── .eslintrc.cjs    # ESLint configuration
├── vite.config.ts   # Vite configuration
├── package.json     # Project metadata and dependencies
├── README.md        # Project documentation
```

## Technologies Used

- **React**: Library for building user interfaces
- **Vite**: Fast development build tool
- **TypeScript**: For type safety
- **Tailwind CSS**: Utility-first CSS framework

## Contributing

We welcome contributions to improve this project! If you have suggestions or bug reports, please open an issue or submit a pull request.

### Steps to Contribute:
1. Fork the repository.
2. Create a new branch for your feature/bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on GitHub.

## License

This project is licensed under the [MIT License](LICENSE).


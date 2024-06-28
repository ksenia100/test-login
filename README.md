# React Authentication App

This project demonstrates a simple React application with a focus on architectural approaches, code organization, and data flow using a reactive model. The application includes authentication functionality, a basic layout, routes, and a homepage.

## Features

- **Authentication**: Login form, mock API service, session state management.
- **Layout**: Simple and clean layout.
- **Routing**: Using `@tanstack/router` for route management.
- **Styling**: TailwindCSS and radix-ui primitives for a pleasant UI.
- **State Management**: Reactive state management with RxJS.
- **Testing**: Comprehensive testing with Vitest.

## Project Structure

The project is organized into several layers to ensure a clear separation of concerns:

- **app**: Entry point and application-level setup.
- **core**: Core utilities and services (e.g., authentication).
- **shared**: Shared components and hooks.
- **pages**: Individual pages of the application.
- **features**: Feature-specific components and logic.

## Technologies Used

- **React**: For building the UI.
- **@tanstack/router**: For routing.
- **TailwindCSS & radix-ui**: For styling.
- **Vite**: For development.
- **TypeScript**: For type safety.
- **SWC**: For faster compilation.
- **RxJS**: For reactive state management.
- **tsyringe**: For dependency injection.
- **Vitest**: For testing.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/ksenia100/test-login.git
   cd test-login
   npm install
   npm run dev

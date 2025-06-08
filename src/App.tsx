/**
 * Root application component module.
 *
 * @module App
 * @description Serves as the main application component, wrapping route definitions with theme context.
 */
import { ThemeProvider } from './providers/ThemeProvider';
import AppRoutes from './routes';

/**
 * App component serving as the root of the application.
 *
 * Wraps AppRoutes within a ThemeProvider configured with default theme and storage key.
 *
 * @component
 * @returns The root component tree including theme and routes.
 */
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;

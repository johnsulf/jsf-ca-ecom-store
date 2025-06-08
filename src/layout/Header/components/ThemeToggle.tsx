/**
 * ThemeToggle module.
 *
 * @module ThemeToggle
 * @description Button component for toggling between light and dark themes.
 */
import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTheme } from '@/providers/ThemeProvider';

/**
 * ThemeToggle component providing a UI control for switching themes.
 *
 * Uses the useTheme hook to toggle between light and dark modes.
 *
 * @component
 * @returns The theme toggle button element.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <Moon className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Sun className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

/**
 * ThemeProvider module.
 *
 * Provides theme context management including setting, persisting, and applying themes.
 *
 * @module ThemeProvider
 */
import { createContext, useContext, useEffect, useState } from 'react';

/**
 * Valid UI themes.
 *
 * @typedef {'dark' | 'light'} Theme
 */
type Theme = 'dark' | 'light';

/**
 * Props for ThemeProvider component.
 *
 * @typedef {Object} ThemeProviderProps
 * @property {React.ReactNode} children - Components that will have access to theme context.
 * @property {Theme} [defaultTheme] - Default theme to apply when none is stored.
 * @property {string} [storageKey] - LocalStorage key for persisting theme choice.
 */
type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

/**
 * State shape for the theme context.
 *
 * @typedef {Object} ThemeProviderState
 * @property {Theme} theme - Current theme value.
 * @property {(theme: Theme) => void} setTheme - Function to update the theme.
 */
type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'light',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

/**
 * ThemeProvider component to wrap the app and provide theme context.
 *
 * @component
 * @param props - Component props.
 * @returns The provider wrapped children.
 */
export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

/**
 * Custom hook to consume theme context.
 *
 * @function useTheme
 * @returns {ThemeProviderState} The current theme context value.
 * @throws Will throw an error if used outside of ThemeProvider.
 */
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeCtx {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeCtx>({ theme: 'dark', toggle: () => {} });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) ?? 'dark'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggle = () =>
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      return next;
    });

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

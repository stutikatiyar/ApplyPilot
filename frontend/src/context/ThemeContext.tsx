import { useEffect, useState } from "react";
import { ThemeContext } from "./theme-context";
import type { Theme } from "./theme-context";

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (
      (localStorage.getItem("theme") as Theme) ||
      "dark"
    );
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
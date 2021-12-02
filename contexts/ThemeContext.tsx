import { createContext, FC, useContext, useReducer } from "react";

type Theme = "dark" | "light";

type Action = { type: "toggle-theme" };

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const themeReducer = (state: Theme, action: Action) => {
  switch (action.type) {
    case "toggle-theme":
      const newTheme = state === "dark" ? "light" : "dark";
      window.localStorage.setItem("theme", newTheme);
      return newTheme;
    default:
      throw new Error(`Undhandled action type: ${action.type}`);
  }
};

const init = (initialTheme: Theme): Theme => {
  const storedTheme = window.localStorage.getItem("theme") as Theme;
  if (storedTheme) {
    return storedTheme;
  }

  const prefersDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (prefersDarkTheme) {
    return "dark";
  }

  const prefersLightTheme = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  if (prefersLightTheme) {
    return "light";
  }

  return initialTheme;
};

const ThemeProvider: FC = ({ children }) => {
  if (typeof window === "undefined") {
    return null;
  }

  const [theme, dispatch] = useReducer(themeReducer, "dark", init);

  const toggleTheme = () => dispatch({ type: "toggle-theme" });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };

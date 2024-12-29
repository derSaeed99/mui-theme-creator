import { createContext, useState, useMemo, ReactNode } from "react";
import { ThemeOptions } from "@mui/material/styles";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";

interface ThemeContextType {
  themeOptions: ThemeOptions;
  setThemeOptions: React.Dispatch<React.SetStateAction<ThemeOptions>>;
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [themeOptions, setThemeOptions] = useState<ThemeOptions>({
    palette: {
      mode: "light",
      // Main colors
      primary: {
        main: "#1976d2",
        light: "#1976d2",
        dark: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
        light: "#dc004e",
        dark: "#dc004e",
      },
      // System colors
      error: {
        main: "#d32f2f",
        light: "#ef5350",
        dark: "#c62828",
      },
      warning: {
        main: "#ed6c02",
        light: "#ff9800",
        dark: "#e65100",
      },
      info: {
        main: "#0288d1",
        light: "#03a9f4",
        dark: "#01579b",
      },
      success: {
        main: "#2e7d32",
        light: "#4caf50",
        dark: "#1b5e20",
      },
      // Grey palette
      grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#f5f5f5",
        A200: "#eeeeee",
        A400: "#bdbdbd",
        A700: "#616161",
      },
      // Interface colors
      background: {
        default: "#ffffff",
        paper: "#f5f5f5",
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        selected: "rgba(0, 0, 0, 0.08)",
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        focus: "rgba(0, 0, 0, 0.12)",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
      fontSize: 14,
    },
    spacing: 8,
    shape: {
      borderRadius: 4,
    },
    transitions: {
      duration: {
        standard: 300,
      },
    },
  });

  // Define the app theme directly here
const appTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#38a3f5",
            light: "#38a3f5",
            dark: "#1976d2",
          },
          secondary: {
            main: "#f4578e",
            light: "#f4578e",
            dark: "#dc004e",
          },
          background: {
            default: mode === "dark" ? "#0A1929" : "#ffffff",
            paper: mode === "dark" ? "#1A2027" : "#f5f5f5",
          },
          text: {
            primary: mode === "dark" ? "#ffffff" : "rgba(0, 0, 0, 0.87)",
            secondary: mode === "dark" ? "#B2BAC2" : "rgba(0, 0, 0, 0.6)",
            disabled:
              mode === "dark"
                ? "rgba(255, 255, 255, 0.5)"
                : "rgba(0, 0, 0, 0.38)",
          },
          divider:
            mode === "dark"
              ? "rgba(255, 255, 255, 0.12)"
              : "rgba(0, 0, 0, 0.12)",
          action: {
            active:
              mode === "dark"
                ? "rgba(255, 255, 255, 0.7)"
                : "rgba(0, 0, 0, 0.54)",
            hover:
              mode === "dark"
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(0, 0, 0, 0.04)",
            selected:
              mode === "dark"
                ? "rgba(255, 255, 255, 0.16)"
                : "rgba(0, 0, 0, 0.08)",
            disabled:
              mode === "dark"
                ? "rgba(255, 255, 255, 0.3)"
                : "rgba(0, 0, 0, 0.26)",
            disabledBackground:
              mode === "dark"
                ? "rgba(255, 255, 255, 0.12)"
                : "rgba(0, 0, 0, 0.12)",
          },
        },
        typography: {
          fontFamily: "Roboto, sans-serif",
          fontSize: 14,
        },
        spacing: 8,
        shape: {
          borderRadius: 4,
        },
        transitions: {
          duration: {
            standard: 300,
          },
        },
      }),
    [mode]
  );

  const value = useMemo(
    () => ({
      themeOptions,
      setThemeOptions,
      mode,
      setMode,
    }),
    [themeOptions, mode]
  );

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={appTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

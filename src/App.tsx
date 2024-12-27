import { useState } from "react";
import { ThemeSettings } from "./ThemeSettings";
import { ComponentPreview } from "./ComponentPreview";
import { ThemeOptions } from "@mui/material/styles";
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { CodeBlock } from "./CodeBlock";

export const App = () => {
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

  const [value, setValue] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const tabValue = params.get("tab");
    if (!tabValue) {
      // Set initial URL parameter if none exists
      params.set("tab", "settings");
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params.toString()}`
      );
    }
    return tabValue ? tabValue : "settings";
  });

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    const params = new URLSearchParams(window.location.search);
    params.set("tab", newValue.toString());
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  return (
    <>
      <AppBar position="sticky" sx={{ width: "100%" }}>
        <Toolbar>
          <Tabs value={value} onChange={handleChange}>
            <Tab
              label={<Typography color="secondary">Theme Settings</Typography>}
              value={"settings"}
            />
            <Tab
              label={<Typography color="secondary">Components</Typography>}
              value={"components"}
            />
            <Tab
              label={<Typography color="secondary">Animations</Typography>}
              value={"animations"}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      {value === "settings" && (
        <Box
          sx={{
            display: "flex",
            height: "calc(100vh - 64px)",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              flexShrink: 0,
              width: "400px",
              overflowY: "auto",
              height: "100%",
              borderRadius: 1,
              boxShadow: 2,
              padding: 2,
            }}
          >
            <ThemeSettings
              themeOptions={themeOptions}
              setThemeOptions={setThemeOptions}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              height: "100%",
              padding: 2,
            }}
          >
            <ComponentPreview themeOptions={themeOptions} />
          </Box>
          <Box
            sx={{
              flexShrink: 0,
              width: "400px",
              overflowY: "auto",
              backgroundColor: "background.paper",
              borderRadius: 1,
              boxShadow: 2,
              padding: 2,
              fontFamily: "monospace",
              whiteSpace: "pre-wrap",
            }}
          >
            <CodeBlock
              mode={themeOptions?.palette?.mode ?? "dark"}
              code={`const themeOptions = ${JSON.stringify(
                themeOptions,
                null,
                2
              )
                .replace(/"([^"]+)":/g, "$1:")
                .replace(/"/g, "'")};`}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

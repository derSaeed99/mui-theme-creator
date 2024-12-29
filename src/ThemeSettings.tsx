import { Box, Divider, Button } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { PaletteSettings } from "./PaletteSettings";
import { TypographySettings } from "./TypographySettings";
import SizingSettings from "./SizingSettings";
import { ComponentSizeSettings } from "./ComponentSizeSettings";
import { SpacingSettings } from "./SpacingSettings";
import { ShapeSettings } from "./ShapeSettings";
import { TransitionsSettings } from "./TransitionsSettings";
import { ThemePresetSelector } from "./ThemePresetSelector";
import { useTheme } from './context/useTheme';

export const ThemeSettings = () => {
    const { themeOptions, setThemeOptions } = useTheme();
    const handlePresetSelect = (newTheme: ThemeOptions) => {
      setThemeOptions({
        ...newTheme,
        // Optionally preserve some existing settings
        transitions: themeOptions.transitions,
      });
    };

    const exportTheme = (format: "json" | "ts" | "js") => {
      const fullTheme = {
        ...themeOptions,
        palette: {
          ...themeOptions.palette,
          // Light mode settings
          light: {
            mode: "light",
            primary: themeOptions.palette?.primary,
            secondary: themeOptions.palette?.secondary,
            error: themeOptions.palette?.error,
            warning: themeOptions.palette?.warning,
            info: themeOptions.palette?.info,
            success: themeOptions.palette?.success,
            background: {
              default: themeOptions.palette?.background?.default || "#ffffff",
              paper: themeOptions.palette?.background?.paper || "#f5f5f5",
            },
            text: {
              primary:
                themeOptions.palette?.text?.primary || "rgba(0, 0, 0, 0.87)",
              secondary:
                themeOptions.palette?.text?.secondary || "rgba(0, 0, 0, 0.6)",
              disabled:
                themeOptions.palette?.text?.disabled || "rgba(0, 0, 0, 0.38)",
            },
            divider: themeOptions.palette?.divider || "rgba(0, 0, 0, 0.12)",
            action: themeOptions.palette?.action || {
              active: "rgba(0, 0, 0, 0.54)",
              hover: "rgba(0, 0, 0, 0.04)",
              selected: "rgba(0, 0, 0, 0.08)",
              disabled: "rgba(0, 0, 0, 0.26)",
              disabledBackground: "rgba(0, 0, 0, 0.12)",
            },
          },
          // Dark mode settings
          dark: {
            mode: "dark",
            primary: themeOptions.palette?.primary,
            secondary: themeOptions.palette?.secondary,
            error: themeOptions.palette?.error,
            warning: themeOptions.palette?.warning,
            info: themeOptions.palette?.info,
            success: themeOptions.palette?.success,
            background: {
              default: themeOptions.palette?.background?.default || "#121212",
              paper: themeOptions.palette?.background?.paper || "#1e1e1e",
            },
            text: {
              primary: themeOptions.palette?.text?.primary || "#ffffff",
              secondary:
                themeOptions.palette?.text?.secondary ||
                "rgba(255, 255, 255, 0.7)",
              disabled:
                themeOptions.palette?.text?.disabled ||
                "rgba(255, 255, 255, 0.5)",
            },
            divider:
              themeOptions.palette?.divider || "rgba(255, 255, 255, 0.12)",
            action: themeOptions.palette?.action || {
              active: "rgba(255, 255, 255, 0.7)",
              hover: "rgba(255, 255, 255, 0.08)",
              selected: "rgba(255, 255, 255, 0.16)",
              disabled: "rgba(255, 255, 255, 0.3)",
              disabledBackground: "rgba(255, 255, 255, 0.12)",
            },
          },
        },
      };

      let fileContent;
      let fileName;

      if (format === "json") {
        fileContent = JSON.stringify(fullTheme, null, 2);
        fileName = "theme.json";
      } else if (format === "ts") {
        fileContent = `import { createTheme } from '@mui/material/styles';

// Theme with both light and dark mode settings
const theme = createTheme({
  ...${JSON.stringify(fullTheme, null, 2)},
  palette: mode => ({
    mode,
    ...(mode === 'light' 
      ? ${JSON.stringify(fullTheme.palette.light, null, 2)}
      : ${JSON.stringify(fullTheme.palette.dark, null, 2)})
  })
});

export default theme;`;
        fileName = "theme.ts";
      } else {
        fileContent = `const { createTheme } = require('@mui/material/styles');

// Theme with both light and dark mode settings
const theme = createTheme({
  ...${JSON.stringify(fullTheme, null, 2)},
  palette: mode => ({
    mode,
    ...(mode === 'light' 
      ? ${JSON.stringify(fullTheme.palette.light, null, 2)}
      : ${JSON.stringify(fullTheme.palette.dark, null, 2)})
  })
});

module.exports = theme;`;
        fileName = "theme.js";
      }

      const themeBlob = new Blob([fileContent], {
        type:
          format === "json"
            ? "application/json"
            : format === "ts"
            ? "application/typescript"
            : "application/javascript",
      });
      const url = URL.createObjectURL(themeBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (
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
        <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
          <ThemePresetSelector onSelect={handlePresetSelect} />
          <PaletteSettings
            themeOptions={themeOptions}
            setThemeOptions={setThemeOptions}
          />
          <ComponentSizeSettings
            themeOptions={themeOptions}
            setThemeOptions={setThemeOptions}
          />
          <TypographySettings
            themeOptions={themeOptions}
            setThemeOptions={setThemeOptions}
          />
          <SizingSettings />
          <Box width="95%">
            <SpacingSettings
              themeOptions={themeOptions}
              setThemeOptions={setThemeOptions}
            />
            <ShapeSettings
              themeOptions={themeOptions}
              setThemeOptions={setThemeOptions}
            />
            <TransitionsSettings
              themeOptions={themeOptions}
              setThemeOptions={setThemeOptions}
            />
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2,
              mb: 2,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => exportTheme("json")}
              fullWidth
              sx={{
                backgroundColor: "#00a896",
                "&:hover": {
                  backgroundColor: "#007f6e",
                },
              }}
            >
              Export Theme (JSON)
            </Button>
            <Button
              variant="contained"
              onClick={() => exportTheme("ts")}
              fullWidth
              sx={{
                backgroundColor: "#007acc",
                "&:hover": {
                  backgroundColor: "#005ea1",
                },
              }}
            >
              Export Theme (TS)
            </Button>
            <Button
              variant="contained"
              onClick={() => exportTheme("js")}
              fullWidth
              sx={{
                backgroundColor: "#f7df1e",
                color: "#000000",
                "&:hover": {
                  backgroundColor: "#d2b200",
                },
              }}
            >
              Export Theme (JS)
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

ThemeSettings.displayName = "ThemeSettings";

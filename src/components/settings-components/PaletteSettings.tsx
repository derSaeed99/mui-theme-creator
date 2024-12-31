import React from "react";
import { Typography, Box, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { useTheme } from "../../context/useTheme";
import { BackgroundColors } from "./paletteSettingsComponents/BackgroundColors";
import { InterfaceColors } from "./paletteSettingsComponents/InterfaceColors";
import { MainColors } from "./paletteSettingsComponents/MainColors";
import { SystemColors } from "./paletteSettingsComponents/SystemColors";

interface PaletteSettingsProps {
  themeOptions: ThemeOptions;
  setThemeOptions: React.Dispatch<React.SetStateAction<ThemeOptions>>;
}

export const PaletteSettings: React.FC<PaletteSettingsProps> = ({
  themeOptions,
  setThemeOptions,
}) => {
  const currentMode = themeOptions?.palette?.mode || "light";
  const { setMode } = useTheme();

  const handleModeChange = (event: SelectChangeEvent) => {
    const newMode = event.target.value as "light" | "dark";
    setMode(newMode);
    setThemeOptions((prev) => ({
      ...prev,
      palette: {
        ...prev.palette,
        mode: newMode,
        background: {
          default: newMode === "light" ? "#ffffff" : "#121212",
          paper: newMode === "light" ? "#f5f5f5" : "#1e1e1e",
        },
        text: {
          primary: newMode === "light" ? "rgba(0, 0, 0, 0.87)" : "#ffffff",
          secondary:
            newMode === "light"
              ? "rgba(0, 0, 0, 0.6)"
              : "rgba(255, 255, 255, 0.7)",
          disabled:
            newMode === "light"
              ? "rgba(0, 0, 0, 0.38)"
              : "rgba(255, 255, 255, 0.5)",
        },
        divider:
          newMode === "light"
            ? "rgba(0, 0, 0, 0.12)"
            : "rgba(255, 255, 255, 0.12)",
        action: {
          ...prev.palette?.action,
          active:
            newMode === "light"
              ? "rgba(0, 0, 0, 0.54)"
              : "rgba(255, 255, 255, 0.7)",
          hover:
            newMode === "light"
              ? "rgba(0, 0, 0, 0.04)"
              : "rgba(255, 255, 255, 0.08)",
          selected:
            newMode === "light"
              ? "rgba(0, 0, 0, 0.08)"
              : "rgba(255, 255, 255, 0.16)",
          disabled:
            newMode === "light"
              ? "rgba(0, 0, 0, 0.26)"
              : "rgba(255, 255, 255, 0.3)",
          disabledBackground:
            newMode === "light"
              ? "rgba(0, 0, 0, 0.12)"
              : "rgba(255, 255, 255, 0.12)",
        },
      },
    }));
  };

  return (
    <Box>
      <Typography sx={{ mb: 2 }} color="secondary" gutterBottom>
        Palette
      </Typography>
      <Select
        value={currentMode}
        onChange={handleModeChange}
        displayEmpty
        sx={{ mb: 2, width: "100%" }}
      >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </Select>
      <MainColors currentMode={currentMode} />
      <SystemColors currentMode={currentMode} />
      <InterfaceColors />
      <BackgroundColors />
    </Box>
  );
};

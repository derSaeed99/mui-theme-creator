import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme as useMuiTheme
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getColorForMode } from "./utils/themeUtils";
import { ColorOption } from "./types/mui";
import { useTheme } from "./context/useTheme";

interface PaletteSettingsProps {
  themeOptions: ThemeOptions;
  setThemeOptions: React.Dispatch<React.SetStateAction<ThemeOptions>>;
}

// Create a reusable style for color circles
const colorCircleStyle = {
  width: 20,
  height: 20,
  borderRadius: "50%",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  // Add a white border for dark mode
  ".MuiTheme-dark &": {
    borderColor: "rgba(255, 255, 255, 0.12)",
  },
};

export const PaletteSettings: React.FC<PaletteSettingsProps> = ({
  themeOptions,
  setThemeOptions,
}) => {
  const currentMode = themeOptions?.palette?.mode || "light";
  const theme = useMuiTheme()
  const { setMode } = useTheme();

  const handleModeChange = (event: SelectChangeEvent) => {
    const newMode = event.target.value as "light" | "dark";
    setMode(newMode)
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

  // Main color handlers
  const handlePrimaryColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newColor = event.target.value;
    setThemeOptions((prev) => ({
      ...prev,
      palette: {
        ...prev.palette,
        primary: {
          ...(prev.palette?.primary as ColorOption),
          main: newColor,
          [currentMode]: newColor,
        },
      },
    }));
  };

  const handleSecondaryColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newColor = event.target.value;
    setThemeOptions((prev) => ({
      ...prev,
      palette: {
        ...prev.palette,
        secondary: {
          ...(prev.palette?.secondary as ColorOption),
          main: newColor,
          [currentMode]: newColor,
        },
      },
    }));
  };

  // System color handlers
  const handleSystemColorChange =
    (colorKey: "error" | "warning" | "info" | "success") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newColor = event.target.value;
      setThemeOptions((prev) => ({
        ...prev,
        palette: {
          ...prev.palette,
          [colorKey]: {
            ...(prev.palette?.[colorKey] as ColorOption),
            main: newColor,
            [currentMode]: newColor,
          },
        },
      }));
    };

  const handleDividerColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newColor = event.target.value;
    setThemeOptions((prev) => ({
      ...prev,
      palette: {
        ...prev.palette,
        divider: newColor,
      },
    }));
  };

  const handleActionColorChange =
    (
      actionKey:
        | "active"
        | "hover"
        | "selected"
        | "disabled"
        | "disabledBackground"
    ) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newColor = event.target.value;
      setThemeOptions((prev) => ({
        ...prev,
        palette: {
          ...prev.palette,
          action: {
            ...prev.palette?.action,
            [actionKey]: newColor,
          },
        },
      }));
    };

  const handleBackgroundColorChange =
    (type: "default" | "paper") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newColor = event.target.value;
      setThemeOptions((prev) => ({
        ...prev,
        palette: {
          ...prev.palette,
          background: {
            ...prev.palette?.background,
            [type]: newColor,
          },
        },
      }));
    };

  return (
    <Box>
      <Typography sx={{ mb: 2 }} color="secondary" gutterBottom>
        Palette
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Mode</InputLabel>
        <Select value={currentMode} onChange={handleModeChange} label="Mode">
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
        </Select>
      </FormControl>

      {/* Main Colors Accordion */}
      <Accordion
        sx={{
          mb: 2,
          borderRadius: 1,
          "&:before": { display: "none" },
          "&.MuiAccordion-root": {
            borderRadius: 1,
            boxShadow: "none",
            border: `1px solid ${theme.palette?.primary?.main}`,
          },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: 2,
            }}
          >
            <Typography>Main Colors</Typography>
            <Box sx={{ display: "flex", gap: 1, ml: "auto", mr: 2 }}>
              <Box
                sx={{
                  ...colorCircleStyle,
                  bgcolor: (themeOptions.palette?.primary as ColorOption)?.main,
                }}
              />
              <Box
                sx={{
                  ...colorCircleStyle,
                  bgcolor: (themeOptions.palette?.secondary as ColorOption)
                    ?.main,
                }}
              />
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="Primary Color"
            type="color"
            fullWidth
            value={
              getColorForMode(
                themeOptions,
                "primary",
                currentMode as "light" | "dark"
              ) || "#1976d2"
            }
            onChange={handlePrimaryColorChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Secondary Color"
            type="color"
            fullWidth
            value={
              getColorForMode(
                themeOptions,
                "secondary",
                currentMode as "light" | "dark"
              ) || "#9c27b0"
            }
            onChange={handleSecondaryColorChange}
            sx={{ mb: 2 }}
          />
        </AccordionDetails>
      </Accordion>

      {/* System Colors Accordion */}
      <Accordion
        sx={{
          mb: 2,
          borderRadius: 1,
          "&:before": { display: "none" },
          "&.MuiAccordion-root": {
            borderRadius: 1,
            boxShadow: "none",
            border: `1px solid ${theme.palette?.primary?.main}`,
          },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: 2,
            }}
          >
            <Typography>System Colors</Typography>
            <Box sx={{ display: "flex", gap: 1, ml: "auto", mr: 2 }}>
              <Box
                sx={{
                  ...colorCircleStyle,
                  bgcolor: (themeOptions.palette?.error as ColorOption)?.main,
                }}
              />
              <Box
                sx={{
                  ...colorCircleStyle,
                  bgcolor: (themeOptions.palette?.warning as ColorOption)?.main,
                }}
              />
              <Box
                sx={{
                  ...colorCircleStyle,
                  bgcolor: (themeOptions.palette?.info as ColorOption)?.main,
                }}
              />
              <Box
                sx={{
                  ...colorCircleStyle,
                  bgcolor: (themeOptions.palette?.success as ColorOption)?.main,
                }}
              />
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="Error Color"
            type="color"
            fullWidth
            value={
              getColorForMode(
                themeOptions,
                "error",
                currentMode as "light" | "dark"
              ) || "#d32f2f"
            }
            onChange={handleSystemColorChange("error")}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Warning Color"
            type="color"
            fullWidth
            value={
              getColorForMode(
                themeOptions,
                "warning",
                currentMode as "light" | "dark"
              ) || "#f57f17"
            }
            onChange={handleSystemColorChange("warning")}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Info Color"
            type="color"
            fullWidth
            value={
              getColorForMode(
                themeOptions,
                "info",
                currentMode as "light" | "dark"
              ) || "#1976d2"
            }
            onChange={handleSystemColorChange("info")}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Success Color"
            type="color"
            fullWidth
            value={
              getColorForMode(
                themeOptions,
                "success",
                currentMode as "light" | "dark"
              ) || "#388e3c"
            }
            onChange={handleSystemColorChange("success")}
            sx={{ mb: 2 }}
          />
        </AccordionDetails>
      </Accordion>

      {/* Interface Colors Accordion */}
      <Accordion
        sx={{
          mb: 2,
          borderRadius: 1,
          "&:before": { display: "none" },
          "&.MuiAccordion-root": {
            borderRadius: 1,
            boxShadow: "none",
            border: `1px solid ${theme.palette?.primary?.main}`,
          },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: 2,
            }}
          >
            <Typography>Interface Colors</Typography>
            <Box sx={{ display: "flex", gap: 1, ml: "auto", mr: 2 }}>
              {/* Action Active (Icon) Color */}
              <Box
                sx={{
                  ...colorCircleStyle,
                  bgcolor: themeOptions.palette?.action?.active,
                }}
              />
              {/* Disabled Color */}
              <Box
                sx={{
                  ...colorCircleStyle,
                  bgcolor: themeOptions.palette?.action?.disabled,
                }}
              />
              {/* Divider Color */}
              <Box
                sx={{
                  ...colorCircleStyle,
                  bgcolor: themeOptions.palette?.divider,
                }}
              />
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="Icon Color (Active)"
            type="color"
            fullWidth
            value={
              themeOptions.palette?.action?.active || "rgba(0, 0, 0, 0.54)"
            }
            onChange={handleActionColorChange("active")}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Disabled Color"
            type="color"
            fullWidth
            value={
              themeOptions.palette?.action?.disabled || "rgba(0, 0, 0, 0.26)"
            }
            onChange={handleActionColorChange("disabled")}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Divider Color"
            type="color"
            fullWidth
            value={themeOptions.palette?.divider || "rgba(0, 0, 0, 0.12)"}
            onChange={handleDividerColorChange}
            sx={{ mb: 2 }}
          />
        </AccordionDetails>
      </Accordion>

      {/* Background Colors Accordion */}
      <Accordion
        sx={{
          mb: 2,
          borderRadius: 1,
          "&:before": { display: "none" },
          "&.MuiAccordion-root": {
            borderRadius: 1,
            boxShadow: "none",
            border: `1px solid ${theme.palette?.primary?.main}`,
          },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: 2,
            }}
          >
            <Typography>Background Colors</Typography>
            <Box sx={{ display: "flex", gap: 1, ml: "auto", mr: 2 }}>
              <Box
                sx={{
                  ...colorCircleStyle,
                  bgcolor: themeOptions.palette?.background?.default,
                }}
              />
              <Box
                sx={{
                  ...colorCircleStyle,
                  bgcolor: themeOptions.palette?.background?.paper,
                }}
              />
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="Default Background"
            type="color"
            fullWidth
            value={themeOptions.palette?.background?.default || "#ffffff"}
            onChange={handleBackgroundColorChange("default")}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Paper Background"
            type="color"
            fullWidth
            value={themeOptions.palette?.background?.paper || "#f5f5f5"}
            onChange={handleBackgroundColorChange("paper")}
            sx={{ mb: 2 }}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

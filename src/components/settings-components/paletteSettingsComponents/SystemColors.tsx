import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getColorForMode } from "../../../utils/themeUtils";
import { ColorOption } from "../../../types/mui";
import { useTheme } from "../../../context/useTheme";

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

interface SystemColorsProps {
  currentMode: "light" | "dark";
}

export const SystemColors: React.FC<SystemColorsProps> = ({ currentMode }) => {
  const { themeOptions, setThemeOptions } = useTheme();
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
  return (
    <Accordion sx={{ mb: 2 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          sx={{ display: "flex", alignItems: "center", width: "100%", gap: 2 }}
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
            getColorForMode(themeOptions, "error", currentMode) || "#d32f2f"
          }
          onChange={handleSystemColorChange("error")}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Warning Color"
          type="color"
          fullWidth
          value={
            getColorForMode(themeOptions, "warning", currentMode) || "#f57f17"
          }
          onChange={handleSystemColorChange("warning")}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Info Color"
          type="color"
          fullWidth
          value={
            getColorForMode(themeOptions, "info", currentMode) || "#1976d2"
          }
          onChange={handleSystemColorChange("info")}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Success Color"
          type="color"
          fullWidth
          value={
            getColorForMode(themeOptions, "success", currentMode) || "#388e3c"
          }
          onChange={handleSystemColorChange("success")}
          sx={{ mb: 2 }}
        />
      </AccordionDetails>
    </Accordion>
  );
};

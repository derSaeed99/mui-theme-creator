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

interface MainColorsProps {
  currentMode: "light" | "dark";
}

export const MainColors: React.FC<MainColorsProps> = ({ currentMode }) => {
  const { themeOptions, setThemeOptions } = useTheme();
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
  return (
    <Accordion sx={{ mb: 2 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          sx={{ display: "flex", alignItems: "center", width: "100%", gap: 2 }}
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
                bgcolor: (themeOptions.palette?.secondary as ColorOption)?.main,
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
            getColorForMode(themeOptions, "primary", currentMode) || "#1976d2"
          }
          onChange={handlePrimaryColorChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Secondary Color"
          type="color"
          fullWidth
          value={
            getColorForMode(themeOptions, "secondary", currentMode) || "#9c27b0"
          }
          onChange={handleSecondaryColorChange}
          sx={{ mb: 2 }}
        />
      </AccordionDetails>
    </Accordion>
  );
};

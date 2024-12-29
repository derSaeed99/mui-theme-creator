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

export const BackgroundColors = () => {
  const { themeOptions, setThemeOptions } = useTheme();
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
    <Accordion sx={{ mb: 2 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          sx={{ display: "flex", alignItems: "center", width: "100%", gap: 2 }}
        >
          <Typography>Background Colors</Typography>
          <Box sx={{ display: "flex", gap: 1, ml: "auto", mr: 2 }}>
            <Box
              sx={{
                ...colorCircleStyle,
                bgcolor: themeOptions.palette?.background?.default || "#ffffff",
              }}
            />
            <Box
              sx={{
                ...colorCircleStyle,
                bgcolor: themeOptions.palette?.background?.paper || "#f5f5f5",
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
  );
};

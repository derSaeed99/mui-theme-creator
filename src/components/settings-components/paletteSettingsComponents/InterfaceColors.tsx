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

export const InterfaceColors = () => {
  const { themeOptions, setThemeOptions } = useTheme();
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
  return (
    <Accordion sx={{ mb: 2 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          sx={{ display: "flex", alignItems: "center", width: "100%", gap: 2 }}
        >
          <Typography>Interface Colors</Typography>
          <Box sx={{ display: "flex", gap: 1, ml: "auto", mr: 2 }}>
            <Box
              sx={{
                ...colorCircleStyle,
                bgcolor:
                  themeOptions.palette?.action?.active || "rgba(0, 0, 0, 0.54)",
              }}
            />
            <Box
              sx={{
                ...colorCircleStyle,
                bgcolor:
                  themeOptions.palette?.action?.disabled ||
                  "rgba(0, 0, 0, 0.26)",
              }}
            />
            <Box
              sx={{
                ...colorCircleStyle,
                bgcolor: themeOptions.palette?.divider || "rgba(0, 0, 0, 0.12)",
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
          value={themeOptions.palette?.action?.active || "rgba(0, 0, 0, 0.54)"}
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
  );
};

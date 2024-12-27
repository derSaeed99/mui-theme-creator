import React from "react";
import { TextField, Typography } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { TypographyOption } from "./types/mui";

interface TypographySettingsProps {
  themeOptions: ThemeOptions;
  setThemeOptions: React.Dispatch<React.SetStateAction<ThemeOptions>>;
}

export const TypographySettings: React.FC<TypographySettingsProps> = ({
  themeOptions,
  setThemeOptions,
}) => {
  const handleFontFamilyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setThemeOptions((prev) => ({
      ...prev,
      typography: {
        ...(prev.typography as TypographyOption),
        fontFamily: event.target.value,
      },
    }));
  };

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThemeOptions((prev) => ({
      ...prev,
      typography: {
        ...(prev.typography as TypographyOption),
        fontSize: Number(event.target.value),
      },
    }));
  };

  return (
    <>
      <Typography color="secondary" sx={{ mb: 2 }}>
        Typography
      </Typography>
      <TextField
        label="Font Family"
        fullWidth
        value={
          (themeOptions.typography as TypographyOption)?.fontFamily ||
          "Roboto, sans-serif"
        }
        onChange={handleFontFamilyChange}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Font Size (px)"
        type="number"
        fullWidth
        value={(themeOptions.typography as TypographyOption)?.fontSize || 14}
        onChange={handleFontSizeChange}
        inputProps={{ min: 12, max: 24 }}
        sx={{ mb: 2 }}
      />
    </>
  );
};

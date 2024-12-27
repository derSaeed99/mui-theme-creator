import React from "react";
import { Slider, Typography } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

interface SpacingSettingsProps {
  themeOptions: ThemeOptions;
  setThemeOptions: React.Dispatch<React.SetStateAction<ThemeOptions>>;
}

export const SpacingSettings: React.FC<SpacingSettingsProps> = ({
  themeOptions,
  setThemeOptions,
}) => {
  const handleSpacingChange = (_: Event, newValue: number | number[]) => {
    setThemeOptions((prev) => ({
      ...prev,
      spacing: newValue as number,
    }));
  };

  return (
    <>
      <Typography color="secondary" sx={{ mb: 1 }}>
        Spacing {`(${themeOptions?.spacing}px)`}
      </Typography>
      <Slider
        value={
          typeof themeOptions.spacing === "number" ? themeOptions.spacing : 8
        }
        onChange={handleSpacingChange}
        min={2}
        max={16}
        step={1}
        marks
        valueLabelDisplay="auto"
      />
    </>
  );
};

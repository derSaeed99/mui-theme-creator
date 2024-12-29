import React from "react";
import { Slider, Typography } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

interface ShapeSettingsProps {
  themeOptions: ThemeOptions;
  setThemeOptions: React.Dispatch<React.SetStateAction<ThemeOptions>>;
}

export const ShapeSettings: React.FC<ShapeSettingsProps> = ({
  themeOptions,
  setThemeOptions,
}) => {
  const handleBorderRadiusChange = (_: Event, newValue: number | number[]) => {
    setThemeOptions((prev) => ({
      ...prev,
      shape: {
        ...prev.shape,
        borderRadius: newValue as number,
      },
    }));
  };

  return (
    <>
      <Typography variant="subtitle1" sx={{ mb: 1 }} color="secondary">
      Shape {`(${themeOptions?.shape?.borderRadius}px)`}
      </Typography>
      <Slider
        value={themeOptions.shape?.borderRadius || 4}
        onChange={handleBorderRadiusChange}
        min={0}
        max={16}
        step={1}
        marks
        valueLabelDisplay="auto"
      />
    </>
  );
};

import React from "react";
import { Slider, Typography, Box } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

interface TransitionsSettingsProps {
  themeOptions: ThemeOptions;
  setThemeOptions: React.Dispatch<React.SetStateAction<ThemeOptions>>;
}

export const TransitionsSettings: React.FC<TransitionsSettingsProps> = ({
  themeOptions,
  setThemeOptions,
}) => {
  const duration = themeOptions.transitions?.duration?.standard || 300;

  const handleTransitionDurationChange = (
    _: Event,
    newValue: number | number[]
  ) => {
    setThemeOptions((prev) => ({
      ...prev,
      transitions: {
        ...prev.transitions,
        duration: {
          ...prev?.transitions?.duration,
          standard: newValue as number,
        },
      },
    }));
  };

  return (
    <>
      <Typography variant="subtitle1" sx={{ mb: 1 }} color="secondary">
        Transitions ({duration}ms)
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Slider
          value={duration}
          onChange={handleTransitionDurationChange}
          min={100}
          max={500}
          step={50}
          marks
          valueLabelDisplay="auto"
        />
      </Box>
    </>
  );
};

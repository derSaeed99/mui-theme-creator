import { Grid, Paper, Typography, Box, Slider } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { getColorForMode } from "../../utils/themeUtils";
import { ColorOption } from "../../types/mui";

interface SlidersSectionProps {
  themeOptions: ThemeOptions;
}

export const SlidersSection = ({ themeOptions }: SlidersSectionProps) => {
  const currentMode = themeOptions?.palette?.mode || "light";

  return (
    <Grid item xs={12}>
      <Paper
        sx={{
          p: 3,
          borderRadius: `${themeOptions?.shape?.borderRadius}px`,
          bgcolor: themeOptions?.palette?.background?.paper,
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: themeOptions?.palette?.text?.primary,
          }}
        >
          Sliders
        </Typography>
        <Box sx={{ width: "100%", mt: 2 }}>
          <Slider
            defaultValue={50}
            sx={{
              "& .MuiSlider-thumb": {
                color: getColorForMode(themeOptions, "primary", currentMode),
              },
              "& .MuiSlider-track": {
                color: getColorForMode(themeOptions, "primary", currentMode),
              },
              "& .MuiSlider-rail": {
                color: (themeOptions?.palette?.primary as ColorOption)?.light,
              },
            }}
          />
          <Slider
            defaultValue={[20, 80]}
            valueLabelDisplay="auto"
            marks
            sx={{
              "& .MuiSlider-thumb": {
                color: getColorForMode(themeOptions, "primary", currentMode),
              },
              "& .MuiSlider-track": {
                color: getColorForMode(themeOptions, "primary", currentMode),
              },
              "& .MuiSlider-rail": {
                color: (themeOptions?.palette?.primary as ColorOption)?.light,
              },
              "& .MuiSlider-mark": {
                color: getColorForMode(themeOptions, "primary", currentMode),
              },
              "& .MuiSlider-valueLabel": {
                bgcolor: getColorForMode(themeOptions, "primary", currentMode),
                color: (themeOptions?.palette?.primary as ColorOption)
                  ?.contrastText,
                borderRadius: themeOptions?.shape?.borderRadius,
              },
            }}
          />
        </Box>
      </Paper>
    </Grid>
  );
};

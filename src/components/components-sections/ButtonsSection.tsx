import { Grid, Paper, Typography, Box, Button, Divider } from "@mui/material";
import { useTheme } from "../../context/useTheme";
import { getColorForMode } from "../../utils/themeUtils";
import { ColorOption } from "../../types/mui";

export const ButtonsSection = () => {
  const { themeOptions } = useTheme();
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
          Buttons
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: getColorForMode(themeOptions, "primary", currentMode),
              color: (themeOptions?.palette?.primary as ColorOption)
                ?.contrastText,
              borderRadius: `${themeOptions?.shape?.borderRadius}px`,
              "&:hover": {
                bgcolor: getColorForMode(themeOptions, "primary", currentMode),
                opacity: 0.8,
              },
            }}
          >
            Primary
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: getColorForMode(themeOptions, "secondary", currentMode),
              borderColor: getColorForMode(
                themeOptions,
                "secondary",
                currentMode
              ),
              borderRadius: `${themeOptions?.shape?.borderRadius}px`,
              "&:hover": {
                borderColor: getColorForMode(
                  themeOptions,
                  "secondary",
                  currentMode
                ),
                bgcolor: "transparent",
                opacity: 0.8,
              },
            }}
          >
            Secondary
          </Button>
          <Button
            variant="text"
            sx={{
              color: getColorForMode(themeOptions, "secondary", currentMode),
              borderRadius: `${themeOptions?.shape?.borderRadius}px`,
              "&:hover": {
                bgcolor: "transparent",
                opacity: 0.8,
              },
            }}
          >
            Text
          </Button>
          <Button
            variant="contained"
            disabled
            sx={{
              borderRadius: `${themeOptions?.shape?.borderRadius}px`,
              bgcolor: themeOptions?.palette?.action?.disabledBackground,
              color: themeOptions?.palette?.action?.disabled,
            }}
          >
            Disabled
          </Button>
        </Box>
        <Divider sx={{ my: 2, borderColor: themeOptions?.palette?.divider }} />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: getColorForMode(themeOptions, "error", currentMode),
              color: (themeOptions?.palette?.error as ColorOption)
                ?.contrastText,
              borderRadius: `${themeOptions?.shape?.borderRadius}px`,
              textTransform: "none",
              "&:hover": {
                bgcolor: getColorForMode(themeOptions, "error", currentMode),
                opacity: 0.8,
              },
            }}
          >
            Error
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: getColorForMode(themeOptions, "warning", currentMode),
              color: (themeOptions?.palette?.warning as ColorOption)
                ?.contrastText,
              borderRadius: `${themeOptions?.shape?.borderRadius}px`,
              textTransform: "none",
              "&:hover": {
                bgcolor: getColorForMode(themeOptions, "warning", currentMode),
                opacity: 0.8,
              },
            }}
          >
            Warning
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: getColorForMode(themeOptions, "info", currentMode),
              color: (themeOptions?.palette?.info as ColorOption)?.contrastText,
              borderRadius: `${themeOptions?.shape?.borderRadius}px`,
              textTransform: "none",
              "&:hover": {
                bgcolor: getColorForMode(themeOptions, "info", currentMode),
                opacity: 0.8,
              },
            }}
          >
            Info
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: getColorForMode(themeOptions, "success", currentMode),
              color: (themeOptions?.palette?.success as ColorOption)
                ?.contrastText,
              borderRadius: `${themeOptions?.shape?.borderRadius}px`,
              textTransform: "none",
              "&:hover": {
                bgcolor: getColorForMode(themeOptions, "success", currentMode),
                opacity: 0.8,
              },
            }}
          >
            Success
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

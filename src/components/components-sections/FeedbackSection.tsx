import { Grid, Paper, Typography, Box, Alert } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { getColorForMode } from "../../utils/themeUtils";

interface FeedbackSectionProps {
  themeOptions: ThemeOptions;
}

export const FeedbackSection = ({ themeOptions }: FeedbackSectionProps) => {
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
            Feedback
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Alert
              severity="success"
              sx={{
                borderRadius: themeOptions?.shape?.borderRadius,
                "& .MuiAlert-icon": {
                  color: getColorForMode(themeOptions, "success", currentMode),
                },
                "& .MuiAlert-message": {
                  color: themeOptions?.palette?.text?.primary,
                },
              }}
            >
              Success Alert
            </Alert>
            <Alert
              severity="error"
              sx={{
                borderRadius: themeOptions?.shape?.borderRadius,
                "& .MuiAlert-icon": {
                  color: getColorForMode(themeOptions, "error", currentMode),
                },
                "& .MuiAlert-message": {
                  color: themeOptions?.palette?.text?.primary,
                },
              }}
            >
              Error Alert
            </Alert>
            <Alert
              severity="warning"
              sx={{
                borderRadius: themeOptions?.shape?.borderRadius,
                "& .MuiAlert-icon": {
                  color: getColorForMode(themeOptions, "warning", currentMode),
                },
                "& .MuiAlert-message": {
                  color: themeOptions?.palette?.text?.primary,
                },
              }}
            >
              Warning Alert
            </Alert>
            <Alert
              severity="info"
              sx={{
                borderRadius: themeOptions?.shape?.borderRadius,
                "& .MuiAlert-icon": {
                  color: getColorForMode(themeOptions, "info", currentMode),
                },
                "& .MuiAlert-message": {
                  color: themeOptions?.palette?.text?.primary,
                },
              }}
            >
              Info Alert
            </Alert>
          </Box>
        </Paper>
      </Grid>
  );
};

import {
  Grid,
  Paper,
  Typography,
  Box,
  CircularProgress,
  LinearProgress,
  Divider,
} from "@mui/material";
import { useTheme } from "../../context/useTheme";
import { getColorForMode } from "../../utils/themeUtils";
import { ColorOption } from "../../types/mui";

export const ProgressSection = () => {
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
          Progress & Loading
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <CircularProgress
            sx={{
              color: getColorForMode(themeOptions, "primary", currentMode),
            }}
          />
          <Divider
            sx={{
              my: 1,
              borderColor: themeOptions?.palette?.divider,
            }}
          />
          <LinearProgress
            sx={{
              borderRadius: themeOptions?.shape?.borderRadius,
              bgcolor: (themeOptions?.palette?.primary as ColorOption)?.light,
              "& .MuiLinearProgress-bar": {
                bgcolor: getColorForMode(themeOptions, "primary", currentMode),
              },
            }}
          />
          <Divider
            sx={{
              my: 1,
              borderColor: themeOptions?.palette?.divider,
            }}
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <CircularProgress
              sx={{
                color: getColorForMode(themeOptions, "secondary", currentMode),
              }}
            />
            <CircularProgress
              sx={{
                color: getColorForMode(themeOptions, "success", currentMode),
              }}
            />
            <CircularProgress
              sx={{
                color: getColorForMode(themeOptions, "error", currentMode),
              }}
            />
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

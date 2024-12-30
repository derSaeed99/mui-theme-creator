import {
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { useTheme } from "../../context/useTheme";
import { getColorForMode } from "../../utils/themeUtils";
import { ColorOption } from "../../types/mui";

export const DataDisplaySection = () => {
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
          Data Display
        </Typography>
        <Card
          sx={{
            borderRadius: `${themeOptions?.shape?.borderRadius}px`,
            bgcolor: themeOptions?.palette?.background?.paper,
            border: `1px solid ${themeOptions?.palette?.divider}`,
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: themeOptions?.palette?.text?.primary,
              }}
            >
              Card Title
            </Typography>
            <Typography
              sx={{
                color: themeOptions?.palette?.text?.secondary,
              }}
            >
              Card description text
            </Typography>
          </CardContent>
        </Card>
        <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
          <Chip
            label="Primary"
            sx={{
              borderRadius: `${themeOptions?.shape?.borderRadius}px`,
              bgcolor: getColorForMode(themeOptions, "primary", currentMode),
              color: (themeOptions?.palette?.primary as ColorOption)
                ?.contrastText,
            }}
          />
          <Chip
            label="Secondary"
            variant="outlined"
            sx={{
              borderRadius: `${themeOptions?.shape?.borderRadius}px`,
              borderColor: getColorForMode(
                themeOptions,
                "secondary",
                currentMode
              ),
              color: getColorForMode(themeOptions, "secondary", currentMode),
            }}
          />
          <Chip
            label="Success"
            sx={{
              borderRadius: `${themeOptions?.shape?.borderRadius}px`,
              bgcolor: getColorForMode(themeOptions, "success", currentMode),
              color: (themeOptions?.palette?.success as ColorOption)
                ?.contrastText,
            }}
          />
        </Box>
      </Paper>
    </Grid>
  );
};

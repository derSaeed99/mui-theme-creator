import { Grid, Paper, Typography, Box, Tabs, Tab } from "@mui/material";
import { useTheme } from "../../context/useTheme";
import { useState } from "react";
import { getColorForMode } from "../../utils/themeUtils";

export const NavigationSection = () => {
  const [value, setValue] = useState(0);
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
          Navigation
        </Typography>
        <Tabs
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          sx={{
            "& .MuiTab-root": {
              color: themeOptions?.palette?.text?.secondary,
              textTransform: "none",
            },
            "& .Mui-selected": {
              color: getColorForMode(themeOptions, "primary", currentMode),
            },
            "& .MuiTabs-indicator": {
              backgroundColor: getColorForMode(
                themeOptions,
                "primary",
                currentMode
              ),
            },
          }}
        >
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
        <Box sx={{ mt: 2 }}>
          {value === 0 && (
            <Typography
              sx={{
                color: themeOptions?.palette?.text?.primary,
              }}
            >
              Tab 1 Content
            </Typography>
          )}
          {value === 1 && (
            <Typography
              sx={{
                color: themeOptions?.palette?.text?.primary,
              }}
            >
              Tab 2 Content
            </Typography>
          )}
          {value === 2 && (
            <Typography
              sx={{
                color: themeOptions?.palette?.text?.primary,
              }}
            >
              Tab 3 Content
            </Typography>
          )}
        </Box>
      </Paper>
    </Grid>
  );
};

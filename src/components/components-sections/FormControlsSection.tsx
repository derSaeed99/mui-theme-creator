import {
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  Switch,
  Checkbox,
  Radio,
  Divider,
} from "@mui/material";
import { useTheme } from "../../context/useTheme";
import { useState } from "react";
import { getColorForMode } from "../../utils/themeUtils";

export const FormControlsSection = () => {
  const { themeOptions } = useTheme();
  const [selectValue, setSelectValue] = useState("1");
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
          Form Controls
        </Typography>
        <TextField
          label="Standard"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: `${themeOptions?.shape?.borderRadius}px`,
            },
            "& .MuiInputLabel-root": {
              color: themeOptions?.palette?.text?.secondary,
              borderColor: getColorForMode(
                themeOptions,
                "primary",
                currentMode
              ),
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: themeOptions?.palette?.divider,
            },
            borderColor: getColorForMode(themeOptions, "primary", currentMode),
          }}
        />
        <Divider sx={{ my: 2, borderColor: themeOptions?.palette?.divider }} />
        <Select
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
          label="Select"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: `${themeOptions?.shape?.borderRadius}px`,
              borderColor: getColorForMode(
                themeOptions,
                "primary",
                currentMode
              ),
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: themeOptions?.palette?.divider,
            },
            borderColor: getColorForMode(themeOptions, "primary", currentMode),
          }}
        >
          <MenuItem value="1">Option 1</MenuItem>
          <MenuItem value="2">Option 2</MenuItem>
          <MenuItem value="3">Option 3</MenuItem>
        </Select>
        <Divider sx={{ my: 2, borderColor: themeOptions?.palette?.divider }} />
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Switch
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: getColorForMode(themeOptions, "primary", currentMode),
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: getColorForMode(
                  themeOptions,
                  "primary",
                  currentMode
                ),
              },
            }}
          />
          <Checkbox
            sx={{
              color: themeOptions?.palette?.text?.secondary,
              "&.Mui-checked": {
                color: getColorForMode(themeOptions, "primary", currentMode),
              },
            }}
          />
          <Radio
            sx={{
              color: themeOptions?.palette?.text?.secondary,
              "&.Mui-checked": {
                color: getColorForMode(themeOptions, "primary", currentMode),
              },
            }}
          />
        </Box>
      </Paper>
    </Grid>
  );
};

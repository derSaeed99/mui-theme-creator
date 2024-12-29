import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { predefinedThemes } from "../../theme";
import { ColorOption, TypographyOption } from "../../types/mui";

interface ThemePresetSelectorProps {
  onSelect: (theme: ThemeOptions) => void;
  setMode: (mode: "light" | "dark") => void;
}

export const ThemePresetSelector = ({
  onSelect,
  setMode,
}: ThemePresetSelectorProps) => {
  return (
    <FormControl fullWidth sx={{ mb: 3 }}>
      <InputLabel id="theme-preset-label">Theme Presets</InputLabel>
      <Select
        labelId="theme-preset-label"
        label="Theme Preset"
        defaultValue=""
        onChange={(event) => {
          const themeName = event.target.value as string;
          if (themeName) {
            const selectedTheme = predefinedThemes[themeName];
            onSelect(selectedTheme);
            setMode(selectedTheme?.palette?.mode ?? "light");
          }
        }}
      >
        {Object.entries(predefinedThemes).map(([name, themeOptions]) => (
          <MenuItem key={name} value={name}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                width: "100%",
              }}
            >
              <Typography sx={{ textTransform: "capitalize" }}>
                {name.replace(/([A-Z])/g, " $1").trim()}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  ml: "auto",
                }}
              >
                {/* Primary Color Circle */}
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    bgcolor: (themeOptions.palette?.primary as ColorOption)
                      ?.main,
                  }}
                />

                {/* Secondary Color Circle */}
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    bgcolor: (themeOptions.palette?.secondary as ColorOption)
                      ?.main,
                  }}
                />

                {/* Font Family */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontFamily: (themeOptions.typography as TypographyOption)
                      ?.fontFamily,
                    minWidth: 100,
                  }}
                >
                  {(themeOptions.typography as TypographyOption)?.fontFamily
                    ?.split(",")[0]
                    .replace(/['"]/g, "")}
                </Typography>
              </Box>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

import { Box, Divider } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { PaletteSettings } from "./PaletteSettings";
import { TypographySettings } from "./TypographySettings";
import SizingSettings from "./SizingSettings";
import { ComponentSizeSettings } from "./ComponentSizeSettings";
import { SpacingSettings } from "./SpacingSettings";
import { ShapeSettings } from "./ShapeSettings";
import { TransitionsSettings } from "./TransitionsSettings";
import { ThemePresetSelector } from "./ThemePresetSelector";
import { useTheme } from "../../context/useTheme";
import { PromptAi } from "../PromptAi";
import { ExportThemeButtonGroup } from "../ExportThemeButtonGroup";
export const ThemeSettings = () => {
  const { themeOptions, setThemeOptions, setMode } = useTheme();
  const handlePresetSelect = (newTheme: ThemeOptions) => {
    setThemeOptions({
      ...newTheme,
      // Optionally preserve some existing settings
      transitions: themeOptions.transitions,
    });
  };

  return (
    <Box
      sx={{
        flexShrink: 0,
        width: "400px",
        overflowY: "auto",
        height: "100%",
        borderRadius: 1,
        boxShadow: 2,
        padding: 2,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
        <ThemePresetSelector onSelect={handlePresetSelect} setMode={setMode} />
        <PromptAi />
        <PaletteSettings
          themeOptions={themeOptions}
          setThemeOptions={setThemeOptions}
        />
        <ComponentSizeSettings
          themeOptions={themeOptions}
          setThemeOptions={setThemeOptions}
        />
        <TypographySettings
          themeOptions={themeOptions}
          setThemeOptions={setThemeOptions}
        />
        <SizingSettings />
        <Box width="95%">
          <SpacingSettings
            themeOptions={themeOptions}
            setThemeOptions={setThemeOptions}
          />
          <ShapeSettings
            themeOptions={themeOptions}
            setThemeOptions={setThemeOptions}
          />
          <TransitionsSettings
            themeOptions={themeOptions}
            setThemeOptions={setThemeOptions}
          />
        </Box>
        <Divider sx={{ mb: 2 }} />
        <Box>
          <ExportThemeButtonGroup />
        </Box>
      </Box>
    </Box>
  );
};

ThemeSettings.displayName = "ThemeSettings";

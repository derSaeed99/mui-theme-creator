import { Box } from "@mui/material";
import { CodeBlock } from "../components/CodeBlock";
import { ComponentPreview } from "../components/preview-components/ComponentPreview";
import { ThemeSettings } from "../components/settings-components/ThemeSettings";
import { useTheme } from "../context/useTheme";

export const ThemeSettingsTab = () => {
  const { themeOptions, mode } = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 64px)",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <ThemeSettings />
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          height: "100%",
          padding: 2,
        }}
      >
        <ComponentPreview />
      </Box>
      <Box
        sx={{
          flexShrink: 0,
          width: "400px",
          overflowY: "auto",
          backgroundColor: "background.paper",
          borderRadius: 1,
          boxShadow: 2,
          padding: 2,
          fontFamily: "monospace",
          whiteSpace: "pre-wrap",
        }}
      >
        <CodeBlock
          mode={mode}
          code={`const themeOptions = ${JSON.stringify(themeOptions, null, 2)
            .replace(/"([^"]+)":/g, "$1:")
            .replace(/"/g, "'")};`}
        />
      </Box>
    </Box>
  );
};

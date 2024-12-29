import { useState, lazy, Suspense } from "react";
import { ComponentPreview } from "./ComponentPreview";
import { Box } from "@mui/material";
import { CodeBlock } from "./CodeBlock";
import { AppBar } from "./components/AppBar";
import { useTheme } from "./context/useTheme";

const ThemeSettings = lazy(() =>
  import("./ThemeSettings").then((module) => ({
    default: module.ThemeSettings,
  }))
);
const ComponentsTab = lazy(() =>
  import("./components/ComponentsTab").then((module) => ({
    default: module.ComponentsTab,
  }))
);
const AnimationsTab = lazy(() =>
  import("./components/AnimationsTab").then((module) => ({
    default: module.AnimationsTab,
  }))
);

export const App = () => {
  const { themeOptions, mode } = useTheme();
  const [value, setValue] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const tabValue = params.get("tab");
    if (!tabValue) {
      params.set("tab", "settings");
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params.toString()}`
      );
    }
    return tabValue ? tabValue : "settings";
  });

  const handleChangeTab = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      params.set("tab", newValue.toString());
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params.toString()}`
      );
    });
  };

  return (
    <>
      <AppBar value={value} handleChange={handleChangeTab} />
      <Suspense fallback={<Box sx={{ p: 4 }}>Loading...</Box>}>
        {value === "settings" && (
          <Box
            sx={{
              display: "flex",
              height: "calc(100vh - 64px)",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <ThemeSettings
            />
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                height: "100%",
                padding: 2,
              }}
            >
              <ComponentPreview themeOptions={themeOptions} />
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
                code={`const themeOptions = ${JSON.stringify(
                  themeOptions,
                  null,
                  2
                )
                  .replace(/"([^"]+)":/g, "$1:")
                  .replace(/"/g, "'")};`}
              />
            </Box>
          </Box>
        )}
        {value === "animations" && <AnimationsTab />}
        {value === "components" && (
          <Box
            sx={{
              display: "flex",
              height: "calc(100vh - 64px)",
              width: "100%",
              overflow: "hidden",
            }}
          >
              <ThemeSettings
              />
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                height: "100%",
                padding: 2,
              }}
            >
              <ComponentsTab themeOptions={themeOptions} />
            </Box>
          </Box>
        )}
      </Suspense>
    </>
  );
};

import { useState, lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import { AppBar } from "./components/AppBar";
import { useTheme } from "./context/useTheme";

const ThemeSettingsTab = lazy(() =>
  import("./tabs/ThemeSettingsTab").then((module) => ({
    default: module.ThemeSettingsTab,
  }))
);
const ComponentsTab = lazy(() =>
  import("./tabs/ComponentsTab").then((module) => ({
    default: module.ComponentsTab,
  }))
);
const AnimationsTab = lazy(() =>
  import("./tabs/AnimationsTab").then((module) => ({
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
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        {value === "settings" && (
          <ThemeSettingsTab themeOptions={themeOptions} mode={mode} />
        )}
        {value === "animations" && <AnimationsTab />}
        {value === "components" && (
              <ComponentsTab themeOptions={themeOptions} />
        )}
      </Suspense>
    </>
  );
};

import { Grid } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { BadgesSection } from "./components-sections/BadgesSection";
import { ButtonsSection } from "./components-sections/ButtonsSection";
import { DataDisplaySection } from "./components-sections/DataDisplaySection";
import { FeedbackSection } from "./components-sections/FeedbackSection";
import { FormControlsSection } from "./components-sections/FormControlsSection";
import { ListsSection } from "./components-sections/ListsSection";
import { NavigationSection } from "./components-sections/NavigationSection";
import { ProgressSection } from "./components-sections/ProgressSection";
import { SlidersSection } from "./components-sections/SlidersSection";
import { TypographySection } from "./components-sections/TypographySection";
import { memo } from "react";
import { Box } from "@mui/material";

interface ComponentsTabProps {
  themeOptions: ThemeOptions;
}

export const ComponentsTab = memo(({ themeOptions }: ComponentsTabProps) => {
  return (
    <Box sx={{ p: 4 }}>
      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: 1600,
          margin: "0 auto",
        }}
      >
        <ButtonsSection themeOptions={themeOptions} />
        <FormControlsSection themeOptions={themeOptions} />
        <NavigationSection themeOptions={themeOptions} />
        <FeedbackSection themeOptions={themeOptions} />
        <DataDisplaySection themeOptions={themeOptions} />
        <SlidersSection themeOptions={themeOptions} />
        <ProgressSection themeOptions={themeOptions} />
        <ListsSection themeOptions={themeOptions} />
        <BadgesSection themeOptions={themeOptions} />
        <TypographySection themeOptions={themeOptions} />
      </Grid>
    </Box>
  );
});

ComponentsTab.displayName = "ComponentsTab";

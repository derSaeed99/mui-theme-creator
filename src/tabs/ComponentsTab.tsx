import { Grid } from "@mui/material";
import { BadgesSection } from "../components/components-sections/BadgesSection";
import { ButtonsSection } from "../components/components-sections/ButtonsSection";
import { DataDisplaySection } from "../components/components-sections/DataDisplaySection";
import { FeedbackSection } from "../components/components-sections/FeedbackSection";
import { FormControlsSection } from "../components/components-sections/FormControlsSection";
import { ListsSection } from "../components/components-sections/ListsSection";
import { NavigationSection } from "../components/components-sections/NavigationSection";
import { ProgressSection } from "../components/components-sections/ProgressSection";
import { SlidersSection } from "../components/components-sections/SlidersSection";
import { TypographySection } from "../components/components-sections/TypographySection";
import { Box } from "@mui/material";
import { ThemeSettings } from "../components/settings-components/ThemeSettings";

export const ComponentsTab = () => {
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
        <Box sx={{ p: 4 }}>
          <Grid
            container
            spacing={3}
            sx={{
              maxWidth: 1600,
              margin: "0 auto",
            }}
          >
            <ButtonsSection />
            <FormControlsSection />
            <NavigationSection />
            <FeedbackSection />
            <DataDisplaySection />
            <SlidersSection />
            <ProgressSection />
            <ListsSection />
            <BadgesSection />
            <TypographySection />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

ComponentsTab.displayName = "ComponentsTab";

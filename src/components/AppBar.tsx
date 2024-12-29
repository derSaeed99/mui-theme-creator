import {
  AppBar as TopBar,
  Box,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import { GitHub as GitHubIcon } from "@mui/icons-material";

interface AppBarProps {
  value: string;
  handleChange: (event: React.SyntheticEvent, newValue: string) => void;
}

export const AppBar = ({value, handleChange}:AppBarProps) => {
  return (
    <TopBar position="sticky" sx={{ width: "100%" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#d32f2f",
              height: 3,
            },
            "& .MuiTab-root": {
              minWidth: "auto",
              px: 3,
              color: "white",
              "&.Mui-selected": {
                color: "#d32f2f",
              },
            },
          }}
        >
          <Tab
            label={<Typography>Theme Settings</Typography>}
            value="settings"
          />
          <Tab
            label={<Typography>Components</Typography>}
            value="components"
          />
          <Tab
            label={<Typography>Animations</Typography>}
            value="animations"
          />
        </Tabs>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Typography
            component="a"
            href="https://mui.com/material-ui/customization/theming/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#007FFF",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            MUIv6 Docs
          </Typography>
          <IconButton
            component="a"
            href="https://github.com/derSaeed99/mui-theme-creator"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </TopBar>
  );
};

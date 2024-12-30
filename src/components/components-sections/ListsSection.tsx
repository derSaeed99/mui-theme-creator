import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { useTheme } from "../../context/useTheme";
import {
  Inbox as InboxIcon,
  Star as StarIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { getColorForMode } from "../../utils/themeUtils";

export const ListsSection = () => {
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
            color: getColorForMode(themeOptions, "primary", currentMode),
          }}
        >
          Lists & Menus
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <InboxIcon
                sx={{
                  color: getColorForMode(themeOptions, "primary", currentMode),
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    color: getColorForMode(
                      themeOptions,
                      "primary",
                      currentMode
                    ),
                  }}
                >
                  Inbox
                </Typography>
              }
              secondary={
                <Typography
                  sx={{
                    color: themeOptions?.palette?.text?.secondary,
                  }}
                >
                  2 new messages
                </Typography>
              }
            />
          </ListItem>
          <Divider sx={{ borderColor: themeOptions?.palette?.divider }} />
          <ListItem>
            <ListItemIcon>
              <StarIcon
                sx={{
                  color: getColorForMode(
                    themeOptions,
                    "secondary",
                    currentMode
                  ),
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    color: getColorForMode(
                      themeOptions,
                      "secondary",
                      currentMode
                    ),
                  }}
                >
                  Starred
                </Typography>
              }
              secondary={
                <Typography
                  sx={{
                    color: themeOptions?.palette?.text?.secondary,
                  }}
                >
                  4 items
                </Typography>
              }
            />
          </ListItem>
          <Divider sx={{ borderColor: themeOptions?.palette?.divider }} />
          <ListItem>
            <ListItemIcon>
              <SendIcon
                sx={{
                  color: getColorForMode(themeOptions, "success", currentMode),
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    color: getColorForMode(
                      themeOptions,
                      "success",
                      currentMode
                    ),
                  }}
                >
                  Sent
                </Typography>
              }
              secondary={
                <Typography
                  sx={{
                    color: themeOptions?.palette?.text?.secondary,
                  }}
                >
                  Last sent 2 hours ago
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  );
};

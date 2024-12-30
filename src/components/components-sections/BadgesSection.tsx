import {
  Grid,
  Paper,
  Typography,
  Box,
  Badge,
  Avatar,
  Divider,
} from "@mui/material";
import {
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  Check as CheckIcon,
} from "@mui/icons-material";
import { getColorForMode } from "../../utils/themeUtils";
import { ColorOption } from "../../types/mui";
import { useTheme } from "../../context/useTheme";

export const BadgesSection = () => {
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
            color: themeOptions?.palette?.text?.primary,
          }}
        >
          Badges & Avatars
        </Typography>
        <Box sx={{ display: "flex", gap: 3, alignItems: "center", mb: 2 }}>
          <Badge
            badgeContent={4}
            sx={{
              "& .MuiBadge-badge": {
                bgcolor: getColorForMode(themeOptions, "primary", currentMode),
                color: (themeOptions?.palette?.primary as ColorOption)
                  ?.contrastText,
              },
            }}
          >
            <MailIcon sx={{ color: themeOptions?.palette?.text?.primary }} />
          </Badge>
          <Badge
            badgeContent={100}
            max={99}
            sx={{
              "& .MuiBadge-badge": {
                bgcolor: getColorForMode(themeOptions, "error", currentMode),
                color: (themeOptions?.palette?.error as ColorOption)
                  ?.contrastText,
              },
            }}
          >
            <NotificationsIcon
              sx={{ color: themeOptions?.palette?.text?.primary }}
            />
          </Badge>
        </Box>
        <Divider sx={{ my: 2, borderColor: themeOptions?.palette?.divider }} />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Avatar
            sx={{
              bgcolor: (themeOptions?.palette?.primary as ColorOption)?.light,
              color: (themeOptions?.palette?.primary as ColorOption)
                ?.contrastText,
            }}
          >
            JD
          </Avatar>
          <Avatar
            sx={{
              bgcolor: getColorForMode(themeOptions, "primary", currentMode),
              color: (themeOptions?.palette?.primary as ColorOption)
                ?.contrastText,
            }}
          >
            MK
          </Avatar>
          <Avatar
            sx={{
              bgcolor: getColorForMode(themeOptions, "success", currentMode),
              color: (themeOptions?.palette?.success as ColorOption)
                ?.contrastText,
            }}
          >
            <CheckIcon />
          </Avatar>
        </Box>
      </Paper>
    </Grid>
  );
};

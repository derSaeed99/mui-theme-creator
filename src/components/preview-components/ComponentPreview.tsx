import React from "react";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";
import {
  Box,
  Button,
  Typography,
  Paper,
  Slider,
  Card,
  CardContent,
  CardActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  Chip,
  Switch,
  TextField,
  Alert,
  IconButton,
  Tooltip,
  Badge,
  Avatar,
} from "@mui/material";
import {
  Favorite,
  Share,
  MoreVert,
  Notifications,
  Error,
  Warning,
  Info,
  CheckCircle,
  Settings,
  Delete,
} from "@mui/icons-material";
import { TransitionsPreview } from "./TransitionsPreview";

interface ComponentPreviewProps {
  themeOptions: ThemeOptions | null;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  themeOptions,
}) => {
  if (!themeOptions) {
    return <div>No theme options provided</div>;
  }
  const theme = createTheme(themeOptions);
  const duration = themeOptions.transitions?.duration?.standard || 300;
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "stretch",
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: 800,
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" color="text.primary" fontWeight="bold">
            MuiV6 Custom Theme
          </Typography>
          <Badge badgeContent={4} color="error">
            <IconButton color="primary">
              <Notifications />
            </IconButton>
          </Badge>
        </Box>

        <Divider />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" color="primary" startIcon={<Favorite />}>
            Primary Action
          </Button>
          <Button variant="outlined" color="secondary" endIcon={<Share />}>
            Secondary Action
          </Button>
          <Button variant="text" color="primary">
            Text Button
          </Button>
        </Box>

        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            System Colors
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Alert severity="error" icon={<Error />}>
              This is an error alert
            </Alert>
            <Alert severity="warning" icon={<Warning />}>
              This is a warning alert
            </Alert>
            <Alert severity="info" icon={<Info />}>
              This is an info alert
            </Alert>
            <Alert severity="success" icon={<CheckCircle />}>
              This is a success alert
            </Alert>
          </Box>
        </Paper>

        <Alert severity="success" sx={{ mt: 2 }}>
          This is a success alert — check it out!
        </Alert>

        <Paper elevation={3} sx={{ p: 3, bgcolor: "background.default" }}>
          <Typography variant="h6" gutterBottom color="text.primary">
            Interactive Elements
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <TextField
              label="Standard Input"
              variant="outlined"
              defaultValue="Text field example"
            />
            <Slider
              defaultValue={70}
              valueLabelDisplay="auto"
              aria-label="Theme Slider"
            />
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Switch defaultChecked />
              <Typography variant="body2" color="text.secondary">
                Toggle Switch
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Card sx={{ width: "100%" }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar sx={{ bgcolor: "primary.main" }}>JP</Avatar>
                <Typography variant="h6">Card Component</Typography>
              </Box>
              <Tooltip title="More options">
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph>
              This card demonstrates various Material-UI components working
              together with your custom theme settings.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              <Chip label="Tag 1" color="primary" variant="outlined" />
              <Chip label="Tag 2" color="secondary" variant="outlined" />
              <Chip label="Tag 3" color="info" variant="outlined" />
            </Box>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" startIcon={<Favorite />}>
              Like
            </Button>
            <Button size="small" color="secondary" startIcon={<Share />}>
              Share
            </Button>
          </CardActions>
        </Card>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Component</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Typography</TableCell>
                <TableCell align="right">
                  <Chip label="Active" color="success" size="small" />
                </TableCell>
                <TableCell align="right">
                  <IconButton size="small" color="primary">
                    <MoreVert />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Buttons</TableCell>
                <TableCell align="right">
                  <Chip label="Review" color="warning" size="small" />
                </TableCell>
                <TableCell align="right">
                  <IconButton size="small" color="primary">
                    <MoreVert />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Interface Elements
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <Tooltip title="Small">
                <IconButton size="small" color="default">
                  <Settings fontSize="small" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Medium">
                <IconButton color="default">
                  <Favorite />
                </IconButton>
              </Tooltip>

              <Tooltip title="Large">
                <IconButton
                  size="large"
                  color="default"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: "1.75rem",
                    },
                  }}
                >
                  <Delete />
                </IconButton>
              </Tooltip>

              <Tooltip title="Disabled">
                <span>
                  <IconButton disabled>
                    <MoreVert />
                  </IconButton>
                </span>
              </Tooltip>
            </Box>

            <Divider />

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button disabled variant="contained">
                Disabled Button
              </Button>
              <TextField
                disabled
                label="Disabled Input"
                defaultValue="Disabled text"
              />
            </Box>
          </Box>
          <Divider sx={{ m: 2 }} />
          <Box sx={{ mt: 2 }}>
            <TransitionsPreview duration={duration} />
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

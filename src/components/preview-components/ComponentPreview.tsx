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
  AppBar,
  Toolbar,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {
  Favorite,
  Share,
  Notifications,
  Error,
  Warning,
  Info,
  CheckCircle,
  MoreVert,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { TransitionsPreview } from "./TransitionsPreview";
import { useTheme } from "../../context/useTheme";

export const ComponentPreview = () => {
  const { themeOptions } = useTheme();
  if (!themeOptions) {
    return <div>No theme options provided</div>;
  }

  const theme = createTheme(themeOptions);
  const duration = themeOptions.transitions?.duration?.standard || 300;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              MuiV6 Theme Preview
            </Typography>
            <Badge badgeContent={4} color="error">
              <IconButton color="inherit">
                <Notifications />
              </IconButton>
            </Badge>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            flex: 1,
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            bgcolor: "background.default",
          }}
        >
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Welcome to the Theme Preview
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Explore how your theme applies to various Material-UI components
              in a real-world application layout.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
            >
              Get Started
            </Button>
          </Paper>
          <Divider />
          <Box>
            <Typography variant="h6" gutterBottom>
              Buttons
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<Favorite />}
              >
                Primary Action
              </Button>
              <Button variant="outlined" color="secondary" endIcon={<Share />}>
                Secondary Action
              </Button>
              <Button variant="text" color="primary">
                Text Button
              </Button>
            </Box>
          </Box>
          <Divider />
          <Box>
            <Typography variant="h6" gutterBottom>
              Alerts
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
          </Box>
          <Divider />
          <Card>
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
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Box>
              <Typography variant="body2" color="text.secondary">
                This card demonstrates various Material-UI components working
                together with your custom theme settings.
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                <Chip label="Tag 1" color="primary" />
                <Chip label="Tag 2" color="secondary" />
                <Chip label="Tag 3" color="info" />
              </Box>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Like
              </Button>
              <Button size="small" color="secondary">
                Share
              </Button>
            </CardActions>
          </Card>
          <Divider />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Component</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Typography</TableCell>
                  <TableCell align="right">
                    <Chip label="Active" color="success" size="small" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Buttons</TableCell>
                  <TableCell align="right">
                    <Chip label="Review" color="warning" size="small" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Divider />
          <Box>
            <Typography variant="h6" gutterBottom>
              Tooltip
            </Typography>
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <Tooltip title="Tooltip on Button" arrow>
                <Button variant="contained" color="primary">
                  Tooltip
                </Button>
              </Tooltip>
              <Tooltip title="Tooltip on Chip" arrow>
                <Chip label="Tooltip" />
              </Tooltip>
              <Tooltip title="Tooltip on Icon" arrow>
                <span>
                  <IconButton disabled>
                    <Favorite />
                  </IconButton>
                </span>
              </Tooltip>
            </Box>
          </Box>
          <Divider />
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Interactive Elements
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Standard Input"
                variant="outlined"
                defaultValue="Text field example"
              />
              <Slider defaultValue={70} valueLabelDisplay="auto" />
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Switch defaultChecked />
                <Typography>Toggle Switch</Typography>
              </Box>
            </Box>
          </Paper>
          <Divider />
          <Paper elevation={3} sx={{ p: 3 }}>
            <TransitionsPreview duration={duration} />
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

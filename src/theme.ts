import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6200EA',
      light: '#7C4DFF',
      dark: '#4A148C'
    },
    secondary: {
      main: '#00E5FF',
      light: '#18FFFF',
      dark: '#00B8D4'
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f'
    },
    warning: {
      main: '#ffa726',
      light: '#ffb74d',
      dark: '#f57c00'
    },
    info: {
      main: '#29b6f6',
      light: '#4fc3f7',
      dark: '#0288d1'
    },
    success: {
      main: '#66bb6a',
      light: '#81c784',
      dark: '#388e3c'
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    }
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontWeight: 700
    },
    button: {
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 16
  },
  transitions: {
    duration: {
      standard: 300
    }
  }
});

export const predefinedThemes: Record<string, ThemeOptions> = {
  ecommerce: {
    palette: {
      mode: "light",
      primary: {
        main: "#2E7D32",
        light: "#4CAF50",
        dark: "#1B5E20",
      },
      secondary: {
        main: "#FF6B6B",
        light: "#FF8A8A",
        dark: "#D32F2F",
      },
      error: {
        main: "#d32f2f",
        light: "#ef5350",
        dark: "#c62828",
      },
      warning: {
        main: "#ffa726",
        light: "#ffb74d",
        dark: "#f57c00",
      },
      info: {
        main: "#29b6f6",
        light: "#4fc3f7",
        dark: "#0288d1",
      },
      success: {
        main: "#66bb6a",
        light: "#81c784",
        dark: "#388e3c",
      },
      background: {
        default: "#ffffff",
        paper: "#f5f5f5",
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        selected: "rgba(0, 0, 0, 0.08)",
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
      },
      grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
      },
    },
    typography: {
      fontFamily: "'Open Sans', sans-serif",
      h1: { fontWeight: 600 },
      button: { textTransform: "none" },
    },
    shape: {
      borderRadius: 8,
    },
  },

  business: {
    palette: {
      mode: "light",
      primary: {
        main: "#1E88E5",
        light: "#42A5F5",
        dark: "#1565C0",
      },
      secondary: {
        main: "#424242",
        light: "#616161",
        dark: "#212121",
      },
      error: {
        main: "#d32f2f",
        light: "#ef5350",
        dark: "#c62828",
      },
      warning: {
        main: "#ffa726",
        light: "#ffb74d",
        dark: "#f57c00",
      },
      info: {
        main: "#29b6f6",
        light: "#4fc3f7",
        dark: "#0288d1",
      },
      success: {
        main: "#66bb6a",
        light: "#81c784",
        dark: "#388e3c",
      },
      background: {
        default: "#ffffff",
        paper: "#fafafa",
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        selected: "rgba(0, 0, 0, 0.08)",
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
      },
      grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      h1: { fontWeight: 500 },
      button: { textTransform: "capitalize" },
    },
    shape: {
      borderRadius: 4,
    },
  },

  techStartup: {
    palette: {
      mode: "dark",
      primary: {
        main: "#6200EA",
        light: "#7C4DFF",
        dark: "#4A148C",
      },
      secondary: {
        main: "#00E5FF",
        light: "#18FFFF",
        dark: "#00B8D4",
      },
      error: {
        main: "#f44336",
        light: "#e57373",
        dark: "#d32f2f",
      },
      warning: {
        main: "#ffa726",
        light: "#ffb74d",
        dark: "#f57c00",
      },
      info: {
        main: "#29b6f6",
        light: "#4fc3f7",
        dark: "#0288d1",
      },
      success: {
        main: "#66bb6a",
        light: "#81c784",
        dark: "#388e3c",
      },
      background: {
        default: "#121212",
        paper: "#1E1E1E",
      },
      text: {
        primary: "#ffffff",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
      },
      divider: "rgba(255, 255, 255, 0.12)",
      action: {
        active: "rgba(255, 255, 255, 0.7)",
        hover: "rgba(255, 255, 255, 0.08)",
        selected: "rgba(255, 255, 255, 0.16)",
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
      },
      grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
      },
    },
    typography: {
      fontFamily: "'Inter', sans-serif",
      h1: { fontWeight: 700 },
      button: { textTransform: "none" },
    },
    shape: {
      borderRadius: 16,
    },
  },

  modernMinimal: {
    palette: {
      mode: "light",
      primary: {
        main: "#000000",
        light: "#333333",
        dark: "#000000",
      },
      secondary: {
        main: "#FFFFFF",
        light: "#FFFFFF",
        dark: "#E0E0E0",
      },
      error: {
        main: "#FF3D00",
        light: "#FF6E40",
        dark: "#DD2C00",
      },
      warning: {
        main: "#FFB300",
        light: "#FFC107",
        dark: "#FF8F00",
      },
      info: {
        main: "#03A9F4",
        light: "#29B6F6",
        dark: "#0288D1",
      },
      success: {
        main: "#00BFA5",
        light: "#1DE9B6",
        dark: "#00897B",
      },
      background: {
        default: "#FFFFFF",
        paper: "#F8F8F8",
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.08)",
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        selected: "rgba(0, 0, 0, 0.08)",
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
      },
      grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
      },
    },
    typography: {
      fontFamily: "'Helvetica Now', sans-serif",
      h1: { fontWeight: 300 },
      button: { textTransform: "none" },
    },
    shape: {
      borderRadius: 0,
    },
  },

  luxuryBrand: {
    palette: {
      mode: "dark",
      primary: {
        main: "#C9B037",
        light: "#D4C04C",
        dark: "#B89B24",
      },
      secondary: {
        main: "#4A4A4A",
        light: "#636363",
        dark: "#333333",
      },
      error: {
        main: "#CF6679",
        light: "#FF8A9B",
        dark: "#B54B5E",
      },
      warning: {
        main: "#D4AF37",
        light: "#E5C158",
        dark: "#C09C2A",
      },
      info: {
        main: "#8CADC7",
        light: "#A3C0D6",
        dark: "#7596B0",
      },
      success: {
        main: "#6B9B58",
        light: "#82AE6F",
        dark: "#588847",
      },
      background: {
        default: "#1A1A1A",
        paper: "#242424",
      },
      text: {
        primary: "#FFFFFF",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
      },
      divider: "rgba(255, 255, 255, 0.12)",
      action: {
        active: "rgba(255, 255, 255, 0.7)",
        hover: "rgba(255, 255, 255, 0.08)",
        selected: "rgba(255, 255, 255, 0.16)",
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
      },
      grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
      },
    },
    typography: {
      fontFamily: "'Playfair Display', serif",
      h1: { fontWeight: 600 },
      button: { textTransform: "uppercase" },
    },
    shape: {
      borderRadius: 2,
    },
  },
};

import "@mui/material/styles";

export interface ColorOption {
  light?: string;
  dark?: string;
  main: string;
  contrastText?: string;
}

export interface TypographyOption {
  fontFamily?: string;
  fontSize?: number;
  fontWeightLight?: number;
  fontWeightRegular?: number;
  fontWeightMedium?: number;
  fontWeightBold?: number;
}

declare module "@mui/material/styles" {
  interface PaletteColor {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  }

  interface SimplePaletteColorOptions {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
  }

  interface PaletteOptions {
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    error?: PaletteColorOptions;
    warning?: PaletteColorOptions;
    info?: PaletteColorOptions;
    success?: PaletteColorOptions;
  }

  interface TypeBackground {
    default: string;
    paper: string;
  }

  interface ThemeOptions {
    typography?: TypographyOption;
  }
}

export {};

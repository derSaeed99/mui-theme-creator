import {
  TextField,
  IconButton,
  Box,
  ThemeOptions,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import { useGetGemini } from "../hooks/useGetGemini";
import { useTheme } from "../context/useTheme";
import { useEffect, useState } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export const PromptAi = () => {
  const { setThemeOptions } = useTheme();
  const [prompt, setPrompt] = useState<string | null>(null);
  const [typePrompt, setTypePrompt] = useState<string>("");
  const { result, loading } = useGetGemini(prompt);

  const cleanThemeOptions = (output: string): ThemeOptions | null => {
    try {
      const cleanedOutput = output
        .replace(/```[a-zA-Z]*\n/g, "")
        .replace(/`/g, "")
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0 && !line.startsWith("//"))
        .join("\n");
      const parsed = JSON.parse(cleanedOutput);
      if (parsed && typeof parsed === "object" && "palette" in parsed) {
        return parsed;
      }
    } catch (error) {
      console.error("Failed to parse theme options:", error);
    }
    return null;
  };

  useEffect(() => {
    if (result) {
      const newThemeOptions: ThemeOptions | null = cleanThemeOptions(result);
      if (newThemeOptions) {
        setThemeOptions((prevOptions) => ({
          ...prevOptions,
          ...newThemeOptions,
        }));
          setPrompt(null);
          setTypePrompt("")
      } else {
        console.error("Invalid theme options received from AI.");
      }
    }
  }, [result, setThemeOptions]);

  const promptDescription = `
Create a Material-UI themeOptions object with the following structure:
{
  palette: {
    mode: string; // "light" or "dark"
    primary: {
      main: string; // Main color for primary
      light: string; // Light variant of primary
      dark: string; // Dark variant of primary
    },
    secondary: {
      main: string; // Main color for secondary
      light: string; // Light variant of secondary
      dark: string; // Dark variant of secondary
    },
    error: {
      main: string; // Main color for error
      light: string; // Light variant of error
      dark: string; // Dark variant of error
    },
    warning: {
      main: string; // Main color for warning
      light: string; // Light variant of warning
      dark: string; // Dark variant of warning
    },
    info: {
      main: string; // Main color for info
      light: string; // Light variant of info
      dark: string; // Dark variant of info
    },
    success: {
      main: string; // Main color for success
      light: string; // Light variant of success
      dark: string; // Dark variant of success
    },
    background: {
      default: string; // Default background color
      paper: string; // Paper background color
    },
    text: {
      primary: string; // Primary text color
      secondary: string; // Secondary text color
      disabled: string; // Disabled text color
    },
    divider: string; // Divider color
    action: {
      active: string; // Active action color
      hover: string; // Hover action color
      selected: string; // Selected action color
      disabled: string; // Disabled action color
      disabledBackground: string; // Disabled background color
    },
    grey: {
      50: string; // Light grey
      100: string; // Grey 100
      200: string; // Grey 200
      300: string; // Grey 300
      400: string; // Grey 400
      500: string; // Grey 500
      600: string; // Grey 600
      700: string; // Grey 700
      800: string; // Grey 800
      900: string; // Grey 900
    },
  },
  typography: {
    fontFamily: string; // Font family
    h1: { fontWeight: number }; // Font weight for h1
    button: { textTransform: string }; // Text transform for buttons
  },
  shape: {
    borderRadius: number; // Border radius for shapes
  },
}
Return only a valid Material-UI themeOptions object in JSON format based on the following description: ${typePrompt}. Do not include any comments, explanations, or additional text.`;

  const handleAiTheme = () => {
    setPrompt(promptDescription);
  };
  return (
    <Box display="flex">
      <TextField
        fullWidth
        disabled={loading}
        label="Let Ask AI"
        placeholder="e.g., light theme with green primary and red secondary"
        onChange={(e) => setTypePrompt(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {loading ? (
                <CircularProgress size={24} />
              ) : (
                <IconButton
                  sx={(theme) => ({
                    color: theme.palette.primary.main,
                  })}
                  onClick={handleAiTheme}
                  disabled={loading}
                >
                  <AutoAwesomeIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          shrink: true,
        }}
        sx={(theme) => ({
          backgroundColor: `${theme.palette.secondary.main}80`,
          borderRadius: theme.shape.borderRadius,
          "& .MuiInputBase-input::placeholder": {
            fontStyle: "italic",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
        })}
      />
    </Box>
  );
};

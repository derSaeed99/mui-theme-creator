import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

interface ComponentSizeSettingsProps {
  themeOptions: ThemeOptions;
  setThemeOptions: React.Dispatch<React.SetStateAction<ThemeOptions>>;
}

export const ComponentSizeSettings: React.FC<ComponentSizeSettingsProps> = ({
  themeOptions,
  setThemeOptions,
}) => {
  const handleComponentSizeChange = (event: SelectChangeEvent) => {
    const size = event.target.value as "small" | "medium";
    setThemeOptions((prev) => ({
      ...prev,
      components: {
        ...prev.components,
        MuiButton: {
          ...prev?.components?.MuiButton,
          defaultProps: { ...prev?.components?.MuiButton?.defaultProps, size },
        },
        MuiTextField: {
          ...prev?.components?.MuiTextField,
          defaultProps: {
            ...prev?.components?.MuiTextField?.defaultProps,
            size,
          },
        },
        MuiMenuItem: {
          ...prev?.components?.MuiMenuItem,
          defaultProps: {
            ...prev?.components?.MuiMenuItem?.defaultProps,
            size,
          },
        },
        MuiFab: {
          ...prev?.components?.MuiFab,
          defaultProps: { ...prev?.components?.MuiFab?.defaultProps, size },
        },
        MuiTable: {
          ...prev?.components?.MuiTable,
          defaultProps: { ...prev?.components?.MuiTable?.defaultProps, size },
        },
        MuiSwitch: {
          ...prev?.components?.MuiSwitch,
          defaultProps: { ...prev?.components?.MuiSwitch?.defaultProps, size },
        },
        MuiChip: {
          ...prev?.components?.MuiChip,
          defaultProps: { ...prev?.components?.MuiChip?.defaultProps, size },
        },
      },
    }));
  };

  const currentSize =
    themeOptions.components?.MuiButton?.defaultProps?.size ||
    themeOptions.components?.MuiTextField?.defaultProps?.size ||
    "medium";

  return (
    <>
      <Typography variant="subtitle1" sx={{ mb: 2 }} color="secondary">
        Component Size
      </Typography>
      <FormControl fullWidth>
        <InputLabel>Component Size</InputLabel>
        <Select
          sx={{ mb: 2 }}
          value={currentSize}
          onChange={handleComponentSizeChange}
          label="Component Size"
        >
          <MenuItem value="small">Small</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

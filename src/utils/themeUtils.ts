import { ThemeOptions } from '@mui/material/styles';
import { ColorOption } from '../types/mui';

export const getColorForMode = (
  themeOptions: ThemeOptions,
  colorType: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success',
  mode: 'light' | 'dark'
): string => {
  const color = themeOptions.palette?.[colorType] as ColorOption | undefined;
  if (!color) return '';
  
  return mode === 'light' 
    ? color.light || color.main 
    : color.dark || color.main;
};

import { Grid, Paper, Typography, Box, Link, Divider } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { getColorForMode } from "../../utils/themeUtils";

interface TypographySectionProps {
  themeOptions: ThemeOptions;
}

export const TypographySection = ({ themeOptions }: TypographySectionProps) => {
  const currentMode = themeOptions?.palette?.mode || "light";

  return (
    <Grid item xs={12}>
      <Paper 
        sx={{ 
          p: 3,
          borderRadius: `${themeOptions?.shape?.borderRadius}px`,
          bgcolor: themeOptions?.palette?.background?.paper
        }}
      >
        <Typography 
          variant="h6" 
          gutterBottom
          sx={{
            color: themeOptions?.palette?.text?.primary
          }}
        >
          Typography & Links
        </Typography>

        {/* Display Variants */}
        <Typography variant="h1" gutterBottom sx={{ color: themeOptions?.palette?.text?.primary }}>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom sx={{ color: themeOptions?.palette?.text?.primary }}>
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom sx={{ color: themeOptions?.palette?.text?.primary }}>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ color: themeOptions?.palette?.text?.primary }}>
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ color: themeOptions?.palette?.text?.primary }}>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: themeOptions?.palette?.text?.primary }}>
          h6. Heading
        </Typography>

        <Divider sx={{ my: 2, borderColor: themeOptions?.palette?.divider }} />

        {/* Subtitles */}
        <Typography variant="subtitle1" gutterBottom sx={{ color: themeOptions?.palette?.text?.primary }}>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
        <Typography variant="subtitle2" gutterBottom sx={{ color: themeOptions?.palette?.text?.primary }}>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>

        <Divider sx={{ my: 2, borderColor: themeOptions?.palette?.divider }} />

        {/* Body Text */}
        <Typography variant="body1" gutterBottom sx={{ color: themeOptions?.palette?.text?.primary }}>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, 
          quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ color: themeOptions?.palette?.text?.primary }}>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, 
          quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
        </Typography>

        <Divider sx={{ my: 2, borderColor: themeOptions?.palette?.divider }} />

        {/* Other Variants */}
        <Typography variant="button" display="block" gutterBottom sx={{ color: themeOptions?.palette?.text?.primary }}>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom sx={{ color: themeOptions?.palette?.text?.secondary }}>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom sx={{ color: themeOptions?.palette?.text?.primary }}>
          overline text
        </Typography>

        <Divider sx={{ my: 2, borderColor: themeOptions?.palette?.divider }} />

        {/* Links */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Link href="#" sx={{ color: getColorForMode(themeOptions, "primary", currentMode) }}>
            Primary link
          </Link>
          <Link href="#" sx={{ color: getColorForMode(themeOptions, "secondary", currentMode) }}>
            Secondary link
          </Link>
        </Box>
      </Paper>
    </Grid>
  );
};

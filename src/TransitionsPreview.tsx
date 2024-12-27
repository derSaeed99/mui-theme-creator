import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  Collapse,
  Fade,
  Grow,
  Zoom,
} from "@mui/material";

interface TransitionsPreviewProps {
  duration: number;
}

export const TransitionsPreview: React.FC<TransitionsPreviewProps> = ({
  duration,
}) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Transitions
      </Typography>
      <Box sx={{ display: "flex", mb: 2 }}>
        <Button
          variant="contained"
          onClick={() => setShowPreview(!showPreview)}
        >
          Toggle Previews
        </Button>
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Fade
          </Typography>
          <Fade in={showPreview} timeout={duration}>
            <Box
              sx={{
                width: 100,
                height: 100,
                bgcolor: "primary.main",
                borderRadius: 1,
              }}
            />
          </Fade>
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Collapse
          </Typography>
          <Collapse in={showPreview} timeout={duration}>
            <Box
              sx={{
                width: 100,
                height: 100,
                bgcolor: "secondary.main",
                borderRadius: 1,
              }}
            />
          </Collapse>
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Grow
          </Typography>
          <Grow in={showPreview} timeout={duration}>
            <Box
              sx={{
                width: 100,
                height: 100,
                bgcolor: "error.main",
                borderRadius: 1,
              }}
            />
          </Grow>
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Zoom
          </Typography>
          <Zoom in={showPreview} timeout={duration}>
            <Box
              sx={{
                width: 100,
                height: 100,
                bgcolor: "success.main",
                borderRadius: 1,
              }}
            />
          </Zoom>
        </Box>
      </Box>
    </Box>
  );
};

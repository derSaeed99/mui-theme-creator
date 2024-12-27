import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { Box, styled, IconButton, Snackbar } from "@mui/material";
import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const StyledEditor = styled(LiveEditor)<{ mode: string }>(({ theme }) => ({
  "& pre": {
    backgroundColor: "black !important",
    border: "none",
    borderRadius: theme.shape.borderRadius,
    margin: "0 !important",
    color: "#fff !important",
  },
  "& textarea": {
    borderRadius: theme.shape.borderRadius,
    color: "#fff !important",
  },
}));

const StyledPreview = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(2),
}));

const StyledError = styled(LiveError)(({ theme }) => ({
  color: theme.palette.error.main,
  padding: theme.spacing(1),
  marginTop: theme.spacing(1),
}));

interface CodeBlockProps {
  code: string;
  mode: string;
}

export const CodeBlock = ({ code, mode }: CodeBlockProps) => {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setShowCopied(true);
  };
  return (
    <LiveProvider code={code}>
      <Box position="relative">
        <IconButton
          onClick={handleCopy}
          sx={{
            position: "absolute",
            right: 1,
            top: 1,
            color: "#fff",
            "&:hover": {
              backgroundColor: "action.hover",
            },
          }}
        >
          <ContentCopyIcon fontSize="small" />
        </IconButton>

        <StyledEditor mode={mode} />
        <StyledPreview>
          <LivePreview />
        </StyledPreview>
        <StyledError />

        <Snackbar
          open={showCopied}
          autoHideDuration={2000}
          onClose={() => setShowCopied(false)}
          message="Code copied to clipboard"
        />
      </Box>
    </LiveProvider>
  );
};

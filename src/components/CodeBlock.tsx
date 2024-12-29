import { LiveEditor, LivePreview, LiveProvider } from "react-live";
import { Box, styled, IconButton, Snackbar } from "@mui/material";
import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const StyledEditor = styled(LiveEditor)<{ mode: string }>(
  ({ theme, mode }) => ({
    "& pre": {
      backgroundColor:
        mode === "dark"
          ? "black !important"
          : `${theme.palette.background.paper} !important`,
      border: `1px solid ${
        mode === "dark" ? "white" : theme.palette.primary.main
      }`,
      borderRadius: theme.shape.borderRadius,
      margin: "0 !important",
      color: `${theme.palette.primary.main} !important`,
      "& .token.plain": {
        color:
          mode === "dark"
            ? theme.palette.primary.main
            : theme.palette.secondary.main,
      },
    },
    "& textarea": {
      borderRadius: theme.shape.borderRadius,
      color: `${theme.palette.background.paper} !important`,
    },
  })
);

const StyledPreview = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(2),
}));

interface CodeBlockProps {
  code: string;
  mode: string;
  noInline?: boolean;
  noPreview?: boolean;
}

export const CodeBlock = ({
  code,
  mode,
  noInline = true,
  noPreview = true,
}: CodeBlockProps) => {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setShowCopied(true);
  };

  return (
    <LiveProvider code={code} noInline={noInline}>
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
        {!noPreview && (
          <StyledPreview>
            <LivePreview />
          </StyledPreview>
        )}
      </Box>
      <Snackbar
        open={showCopied}
        autoHideDuration={2000}
        onClose={() => setShowCopied(false)}
        message="Code copied to clipboard"
      />
    </LiveProvider>
  );
};

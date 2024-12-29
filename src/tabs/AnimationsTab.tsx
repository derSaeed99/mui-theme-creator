import { Box, Grid, Typography, Slider, Select, MenuItem } from "@mui/material";
import { keyframes } from "@emotion/react";
import { CodeBlock } from "../components/CodeBlock";
import { useState } from "react";
import { useTheme } from "../context/useTheme";

// Sample predefined animations
const animations = {
  bounce: keyframes`
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  `,
  slideIn: keyframes`
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  `,
  shake: keyframes`
    0%, 100% {
      transform: translateX(0);
    }
    10%, 30%, 50%, 70%, 90% {
      transform: translateX(-10px);
    }
    20%, 40%, 60%, 80% {
      transform: translateX(10px);
    }
  `,
  popBounce: keyframes`
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  `,
  rotate: keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `,
  pulse: keyframes`
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(0.9);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  `,
  flip: keyframes`
    0% {
      transform: perspective(400px) rotateY(0);
    }
    100% {
      transform: perspective(400px) rotateY(360deg);
    }
  `,
  fadeIn: keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,
};

// Add type for available animations
type AnimationType = keyof typeof animations;

export const AnimationsTab = () => {
  const { mode } = useTheme();
  const [selectedAnimation, setSelectedAnimation] =
    useState<AnimationType | null>(null);
  const [duration, setDuration] = useState<number>(500);
  const [easing, setEasing] = useState<string>("ease-in-out");
  const [delay, setDelay] = useState<number>(0);
  const [iterations, setIterations] = useState<string>("1");
  const [trigger, setTrigger] = useState<string>("&:active");

  return (
    <Box sx={{ m: 2 }}>
      <Box sx={{ display: "flex", gap: 4 }}>
        {/* Left side - Animation circles, instruction, and controls */}
        <Box sx={{ width: "400px" }}>
          <Grid container spacing={4} sx={{ maxWidth: 600 }}>
            {Object.keys(animations).map((animationType) => (
              <Grid item xs={3} key={animationType}>
                <Box
                  onClick={() =>
                    setSelectedAnimation(animationType as AnimationType)
                  }
                  onMouseDown={() =>
                    setSelectedAnimation(animationType as AnimationType)
                  }
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    bgcolor: {
                      bounce: "success.main",
                      slideIn: "info.main",
                      shake: "error.main",
                      popBounce: "warning.main",
                      rotate: "secondary.main",
                      pulse: "primary.main",
                      flip: "info.dark",
                      fadeIn: "success.dark",
                    }[animationType as AnimationType],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow:
                      selectedAnimation === animationType
                        ? "inset 0 0 0 3px #fff, 0 3px 6px rgba(0,0,0,0.2)"
                        : 3,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    mx: "auto",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow:
                        selectedAnimation === animationType
                          ? "inset 0 0 0 3px #fff, 0 6px 12px rgba(0,0,0,0.3)"
                          : 6,
                      cursor: "pointer",
                    },
                    ...(trigger === "@keyframes"
                      ? {
                          animation: `${
                            animations[animationType as AnimationType]
                          } ${duration}ms ${easing} ${delay}ms ${iterations}`,
                        }
                      : {
                          [trigger]: {
                            animation: `${
                              animations[animationType as AnimationType]
                            } ${duration}ms ${easing} ${delay}ms ${iterations}`,
                          },
                        }),
                  }}
                >
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: "medium",
                      textTransform: "capitalize",
                    }}
                  >
                    {animationType}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="body2"
            color="secondary"
            sx={{ textAlign: "center", mt: 1, mb: 3 }}
          >
            (Click and hold)
          </Typography>

          {/* Animation Controls */}
          <Box sx={{ mt: 2 }}>
            <Box sx={{ mb: 3 }}>
              <Typography gutterBottom>Animation Speed (ms)</Typography>
              <Slider
                value={duration}
                onChange={(_, newValue) => setDuration(newValue as number)}
                min={100}
                max={2000}
                step={100}
                marks
                valueLabelDisplay="auto"
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography gutterBottom>Easing</Typography>
              <Select
                value={easing}
                onChange={(e) => setEasing(e.target.value)}
                size="small"
                fullWidth
              >
                <MenuItem value="linear">Linear</MenuItem>
                <MenuItem value="ease">Ease</MenuItem>
                <MenuItem value="ease-in">Ease In</MenuItem>
                <MenuItem value="ease-out">Ease Out</MenuItem>
                <MenuItem value="ease-in-out">Ease In Out</MenuItem>
                <MenuItem value="cubic-bezier(0.68, -0.55, 0.265, 1.55)">
                  Bounce
                </MenuItem>
              </Select>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography gutterBottom>Delay (ms)</Typography>
              <Slider
                value={delay}
                onChange={(_, newValue) => setDelay(newValue as number)}
                min={0}
                max={1000}
                step={100}
                marks
                valueLabelDisplay="auto"
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography gutterBottom>Iterations</Typography>
              <Select
                value={iterations}
                onChange={(e) => setIterations(e.target.value)}
                size="small"
                fullWidth
              >
                <MenuItem value="1">Once</MenuItem>
                <MenuItem value="2">Twice</MenuItem>
                <MenuItem value="3">Three times</MenuItem>
                <MenuItem value="infinite">Infinite</MenuItem>
              </Select>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography gutterBottom>Trigger Event</Typography>
              <Select
                value={trigger}
                onChange={(e) => setTrigger(e.target.value)}
                size="small"
                fullWidth
              >
                <MenuItem value="&:active">On Click (hold)</MenuItem>
                <MenuItem value="&:hover">On Hover</MenuItem>
                <MenuItem value="@keyframes">On Mount/Change</MenuItem>
              </Select>
            </Box>
          </Box>
        </Box>

        {/* Right side - Code example */}
        {selectedAnimation && (
          <Box sx={{ flex: 1 }}>
            <CodeBlock
              mode={mode}
              code={
                trigger === "@keyframes"
                  ? `import { keyframes } from "@emotion/react";

const ${selectedAnimation} = keyframes\`${
                      animations[selectedAnimation as AnimationType].styles
                    }\`

// Use in any MUI component:
<Box sx={{ 
  animation: \`\${${selectedAnimation}} ${duration}ms ${easing} ${delay}ms ${iterations}\`
}}>
  content
</Box>`
                  : `import { keyframes } from "@emotion/react";

const ${selectedAnimation} = keyframes\`${
                      animations[selectedAnimation as AnimationType].styles
                    }\`

// Use in any MUI component:
<Box sx={{ 
  '${trigger}': { 
    animation: \`\${${selectedAnimation}} ${duration}ms ${easing} ${delay}ms ${iterations}\` 
  }
}}>
  content
</Box>`
              }
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

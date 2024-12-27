import { keyframes } from "@emotion/react";
import { cloneElement, useState, useEffect } from "react";

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
};

type AnimationType = keyof typeof animations;
type TriggerType = "onClick" | "onChange" | "onHover" | "onMount";

interface AnimateProps {
  children: React.ReactElement;
  animation: AnimationType;
  duration?: number;
  easing?: string;
  delay?: number;
  trigger?: TriggerType;
  infinite?: boolean;
}

export const Animate = ({
  children,
  animation,
  duration = 1000,
  easing = "ease-in-out",
  delay = 0,
  trigger = "onMount",
  infinite = false,
}: AnimateProps) => {
  const [isAnimating, setIsAnimating] = useState(trigger === "onMount");

  const animationStyle = {
    animation: isAnimating
      ? `${animations[animation]} ${duration}ms ${easing} ${delay}ms ${
          infinite ? "infinite" : "1"
        }`
      : "none",
  };

  const handleTrigger = () => {
    if (trigger !== "onMount") {
      setIsAnimating(true);
    }
  };

  useEffect(() => {
    if (!infinite && trigger !== "onMount") {
      const timer = setTimeout(() => setIsAnimating(false), duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, infinite, trigger]);

  const childProps = {
    style: { ...children.props.style, ...animationStyle },
    onClick: trigger === "onClick" ? handleTrigger : children.props.onClick,
    onChange: trigger === "onChange" ? handleTrigger : children.props.onChange,
    onMouseEnter:
      trigger === "onHover" ? handleTrigger : children.props.onMouseEnter,
  };

  return cloneElement(children, childProps);
};

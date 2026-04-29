"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export type ButtonVariant =
  | "primary"
  | "emerald"
  | "martyr"
  | "prison"
  | "torture"
  | "uprising"
  | "disappearance"
  | "secondary"
  | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonStyles {
  fromColor?: string;
  toColor?: string;
  hoverFromColor?: string;
  hoverToColor?: string;
  particle1Color?: string;
  particle2Color?: string;
  padding?: string;
  fontSize?: string;
  iconSize?: string;
  borderRadius?: string;
  boxShadow?: string;
  hoverBoxShadow?: string;
  textColor?: string;
  hoverTextColor?: string;
  letterSpacing?: string;
  fontWeight?: string | number;
  transitionDuration?: string;
  customClasses?: string;
}

interface ReusableButtonProps {
  href: string;
  language: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
  showIcon?: boolean;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  styles?: ButtonStyles;
  showParticles?: boolean;
  customIcon?: React.ReactNode;
  disableHover?: boolean;
}

const BNPButton: React.FC<ReusableButtonProps> = ({
  href,
  language,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  showIcon = true,
  iconPosition = "right",
  onClick,
  styles = {},
  showParticles = true,
  customIcon,
  disableHover = false,
}) => {
  const themeColors = {
    primary: {
      main: "#216740",
      light: "#2E8B57",
      dark: "#1A4F32",
    },
    secondary: {
      main: "#FEC909",
      light: "#FFD633",
      dark: "#D4A800",
    },
    emerald: {
      from: "#059669",  // emerald-600
      to: "#047857",    // emerald-700
      hoverFrom: "#10b981", // emerald-500
      hoverTo: "#059669",   // emerald-600
      shadow: "rgba(5, 150, 105, 0.3)",
    },
  };

  const getDefaultGradientColors = () => {
    switch (variant) {
      case "emerald":
        return { from: themeColors.emerald.from, to: themeColors.emerald.to };
      case "martyr":
        return { from: "#CB2D2E", to: "#FF6B6B" };
      case "prison":
        return { from: themeColors.primary.main, to: "#CB2D2E" };
      case "torture":
        return { from: "#8B0000", to: "#CB2D2E" };
      case "uprising":
        return { from: themeColors.primary.main, to: "#dc2626" };
      case "disappearance":
        return { from: themeColors.primary.main, to: "#CB2D2E" };
      case "secondary":
        return { from: themeColors.secondary.main, to: themeColors.secondary.dark };
      case "outline":
        return { from: "transparent", to: "transparent" };
      default:
        return { from: themeColors.primary.main, to: themeColors.primary.dark };
    }
  };

  const defaultHoverColors = {
    emerald: { from: themeColors.emerald.hoverFrom, to: themeColors.emerald.hoverTo },
    martyr: { from: "#FF6B6B", to: "#CB2D2E" },
    prison: { from: "#CB2D2E", to: themeColors.primary.main },
    torture: { from: "#CB2D2E", to: "#8B0000" },
    uprising: { from: "#dc2626", to: themeColors.primary.main },
    disappearance: { from: "#CB2D2E", to: themeColors.primary.main },
    secondary: { from: themeColors.secondary.light, to: themeColors.secondary.main },
    outline: { from: themeColors.primary.main, to: themeColors.primary.dark },
    primary: { from: themeColors.primary.light, to: themeColors.primary.main },
  };

  const defaultGradient = getDefaultGradientColors();
  const defaultHover = defaultHoverColors[variant] || defaultHoverColors.primary;

  const fromColor = styles.fromColor || defaultGradient.from;
  const toColor = styles.toColor || defaultGradient.to;
  const hoverFromColor = styles.hoverFromColor || defaultHover.from;
  const hoverToColor = styles.hoverToColor || defaultHover.to;

  const getSizeStyles = () => {
    if (styles.padding || styles.fontSize) {
      return {
        padding: styles.padding || (size === "sm" ? "py-1.5 px-3" : size === "lg" ? "py-3 px-6" : "py-2 px-4"),
        textSize: styles.fontSize || (size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm"),
        iconSize: styles.iconSize || (size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm"),
        gap: "gap-1.5",
      };
    }

    switch (size) {
      case "sm":
        return { padding: "py-1.5 px-4", textSize: "text-xs", iconSize: "text-xs", gap: "gap-1.5" };
      case "lg":
        return { padding: "py-3 px-7", textSize: "text-base", iconSize: "text-base", gap: "gap-2.5" };
      default:
        return { padding: "py-2 px-5", textSize: "text-sm", iconSize: "text-sm", gap: "gap-2" };
    }
  };

  const sizeStyles = getSizeStyles();
  const gradientStyle = `linear-gradient(135deg, ${fromColor}, ${toColor})`;
  const hoverGradientStyle = `linear-gradient(135deg, ${hoverFromColor}, ${hoverToColor})`;
  const isOutline = variant === "outline";

  // Get shadow color based on variant
  const getShadowColor = () => {
    if (variant === "emerald") return themeColors.emerald.shadow;
    return "rgba(0, 0, 0, 0.08)";
  };

  const buttonStyle: React.CSSProperties = {
    background: isOutline ? "transparent" : gradientStyle,
    borderRadius: styles.borderRadius || "9999px", // Changed to full rounded
    boxShadow: isOutline ? "none" : `0 4px 14px ${getShadowColor()}`,
    color: isOutline ? themeColors.primary.main : "white",
    fontWeight: 600, // Changed to semibold
    transition: `all ${styles.transitionDuration || "0.3s"} ease`,
    border: isOutline ? `2px solid ${themeColors.emerald.from}` : "none",
  };

  return (
    <Link
      href={href}
      className={`relative group inline-block ${fullWidth ? "w-full" : ""} ${className || ""}`}
      onClick={onClick}
    >
      <button
        className={`relative w-full ${sizeStyles.padding} rounded-full font-semibold transition-all duration-300 cursor-pointer overflow-hidden`}
        style={buttonStyle}
        onMouseEnter={(e) => {
          if (disableHover) return;
          const target = e.currentTarget;
          target.style.transform = "translateY(-2px) scale(1.02)";

          if (variant === "emerald") {
            target.style.boxShadow = "0 10px 25px -5px rgba(5, 150, 105, 0.4)";
          } else {
            target.style.boxShadow = isOutline ? "0 4px 12px rgba(33, 103, 64, 0.15)" : "0 6px 16px rgba(0, 0, 0, 0.12)";
          }

          if (!isOutline) {
            target.style.background = hoverGradientStyle;
          } else {
            target.style.background = themeColors.emerald.from;
            target.style.color = "white";
            target.style.borderColor = themeColors.emerald.from;
          }
        }}
        onMouseLeave={(e) => {
          if (disableHover) return;
          const target = e.currentTarget;
          target.style.transform = "translateY(0) scale(1)";
          target.style.boxShadow = isOutline ? "none" : `0 4px 14px ${getShadowColor()}`;

          if (!isOutline) {
            target.style.background = gradientStyle;
          } else {
            target.style.background = "transparent";
            target.style.color = themeColors.emerald.from;
            target.style.borderColor = themeColors.emerald.from;
          }
        }}
      >
        <span className={`relative z-10 flex items-center justify-center ${sizeStyles.gap} ${sizeStyles.textSize}`}>
          {showIcon && iconPosition === "left" && (
            <span className={`${sizeStyles.iconSize} transition-transform duration-300 group-hover:-translate-x-1`}>
              {customIcon || <FaArrowRight />}
            </span>
          )}
          {children}
          {showIcon && iconPosition === "right" && (
            <span className={`${sizeStyles.iconSize} transition-transform duration-300 group-hover:translate-x-1`}>
              {customIcon || <FaArrowRight />}
            </span>
          )}
        </span>
      </button>
    </Link>
  );
};

export default BNPButton;
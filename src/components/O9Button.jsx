import { useState } from "react";

const SIZE_MAP = {
  small: {
    height: 24,
    paddingX: 8,
    gap: 4,
    icon: 16,
    fontSize: 12,
  },
  medium: {
    height: 32,
    paddingX: 12,
    gap: 4,
    icon: 20,
    fontSize: 14,
  },
  large: {
    height: 40,
    paddingX: 12,
    gap: 6,
    icon: 24,
    fontSize: 16,
  },
};

const TOKENS = {
  primary: {
    enable: { bg: "#3d6dcc", border: "#3d6dcc", text: "#ffffff", icon: "#ffffff" },
    hover: { bg: "#2758ba", border: "#2758ba", text: "#ffffff", icon: "#ffffff" },
    active: { bg: "#11398c", border: "#11398c", text: "#ffffff", icon: "#ffffff" },
    "focus-visible": { bg: "#2758ba", border: "#2758ba", text: "#ffffff", icon: "#ffffff", ring: "#3d6dcc" },
    disabled: { bg: "#e5e5e5", border: "#e5e5e5", text: "#b2b2b2", icon: "#b2b2b2" },
  },
  secondary: {
    enable: { bg: "#f2f2f2", border: "#f2f2f2", text: "#303030", icon: "#303030" },
    hover: { bg: "#bbddff", border: "#bbddff", text: "#2758ba", icon: "#2758ba" },
    active: { bg: "#8fc2ff", border: "#8fc2ff", text: "#11398c", icon: "#11398c" },
    "focus-visible": { bg: "#bbddff", border: "#bbddff", text: "#2758ba", icon: "#2758ba", ring: "#3d6dcc" },
    disabled: { bg: "#e5e5e5", border: "#e5e5e5", text: "#b2b2b2", icon: "#b2b2b2" },
  },
  tertiary: {
    enable: { bg: "transparent", border: "transparent", text: "#303030", icon: "#303030" },
    hover: { bg: "#bbddff", border: "#bbddff", text: "#2758ba", icon: "#2758ba" },
    active: { bg: "#8fc2ff", border: "#8fc2ff", text: "#11398c", icon: "#11398c" },
    "focus-visible": { bg: "#bbddff", border: "#bbddff", text: "#2758ba", icon: "#2758ba", ring: "#3d6dcc" },
    disabled: { bg: "transparent", border: "transparent", text: "#b2b2b2", icon: "#b2b2b2" },
  },
  outline: {
    enable: { bg: "transparent", border: "#3d6dcc", text: "#3d6dcc", icon: "#3d6dcc" },
    hover: { bg: "#bbddff", border: "#bbddff", text: "#2758ba", icon: "#2758ba" },
    active: { bg: "#8fc2ff", border: "#8fc2ff", text: "#11398c", icon: "#11398c" },
    "focus-visible": { bg: "#bbddff", border: "#bbddff", text: "#2758ba", icon: "#2758ba", ring: "#3d6dcc" },
    disabled: { bg: "transparent", border: "#cccccc", text: "#b2b2b2", icon: "#b2b2b2" },
  },
  "danger-primary": {
    enable: { bg: "#bc1227", border: "#bc1227", text: "#ffffff", icon: "#ffffff" },
    hover: { bg: "#931d07", border: "#931d07", text: "#ffffff", icon: "#ffffff" },
    active: { bg: "#660914", border: "#660914", text: "#ffffff", icon: "#ffffff" },
    "focus-visible": { bg: "#931d07", border: "#931d07", text: "#ffffff", icon: "#ffffff", ring: "#3d6dcc" },
    disabled: { bg: "#e5e5e5", border: "#e5e5e5", text: "#b2b2b2", icon: "#b2b2b2" },
  },
  "danger-tertiary": {
    enable: { bg: "transparent", border: "transparent", text: "#bc1227", icon: "#bc1227" },
    hover: { bg: "#931d07", border: "#931d07", text: "#ffffff", icon: "#ffffff" },
    active: { bg: "#660914", border: "#660914", text: "#ffffff", icon: "#ffffff" },
    "focus-visible": { bg: "#931d07", border: "#931d07", text: "#ffffff", icon: "#ffffff", ring: "#3d6dcc" },
    disabled: { bg: "transparent", border: "transparent", text: "#b2b2b2", icon: "#b2b2b2" },
  },
  "danger-outline": {
    enable: { bg: "transparent", border: "#bc1227", text: "#bc1227", icon: "#bc1227" },
    hover: { bg: "#931d07", border: "#931d07", text: "#ffffff", icon: "#ffffff" },
    active: { bg: "#660914", border: "#660914", text: "#ffffff", icon: "#ffffff" },
    "focus-visible": { bg: "#931d07", border: "#931d07", text: "#ffffff", icon: "#ffffff", ring: "#3d6dcc" },
    disabled: { bg: "transparent", border: "#cccccc", text: "#b2b2b2", icon: "#b2b2b2" },
  },
};

function CloseIcon({ size = 20, color = "currentColor" }) {
  const strokeWidth = size <= 16 ? 1.5 : 1.7;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      className="o9-button-icon"
    >
      <path
        d="M6.1 6.1 13.9 13.9M13.9 6.1 6.1 13.9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function O9Button({
  label = "Button",
  variant = "primary",
  size = "medium",
  state = "enable",
  previewState = null,
  interactive = false,
  isDisabled = false,
  hasLeadingIcon = true,
  leadingIcon = null,
  className = "",
  ...props
}) {
  const [liveState, setLiveState] = useState("enable");
  const actualState = isDisabled ? "disabled" : previewState || liveState || state;
  const sizeTokens = SIZE_MAP[size] || SIZE_MAP.medium;
  const tone = TOKENS[variant]?.[actualState] || TOKENS.primary.enable;

  const style = {
    "--o9-btn-height": `${sizeTokens.height}px`,
    "--o9-btn-padding-x": `${sizeTokens.paddingX}px`,
    "--o9-btn-gap": `${sizeTokens.gap}px`,
    "--o9-btn-font-size": `${sizeTokens.fontSize}px`,
    "--o9-btn-icon-size": `${sizeTokens.icon}px`,
    "--o9-btn-bg": tone.bg,
    "--o9-btn-border": tone.border,
    "--o9-btn-text": tone.text,
    "--o9-btn-icon": tone.icon,
    "--o9-btn-ring": tone.ring || "transparent",
  };

  return (
    <button
      type="button"
      className={`o9-button ${className}`.trim()}
      data-variant={variant}
      data-size={size}
      data-state={actualState}
      disabled={isDisabled}
      style={style}
      onMouseEnter={() => interactive && setLiveState("hover")}
      onMouseLeave={() => interactive && setLiveState("enable")}
      onMouseDown={() => interactive && setLiveState("active")}
      onMouseUp={() => interactive && setLiveState("hover")}
      onFocus={() => interactive && setLiveState("focus-visible")}
      onBlur={() => interactive && setLiveState("enable")}
      onKeyDown={(event) => {
        if (!interactive) {
          return;
        }
        if (event.key === " " || event.key === "Enter") {
          setLiveState("active");
        }
      }}
      onKeyUp={(event) => {
        if (!interactive) {
          return;
        }
        if (event.key === " " || event.key === "Enter") {
          setLiveState("focus-visible");
        }
      }}
      {...props}
    >
      {actualState === "focus-visible" ? <span className="o9-button-ring" aria-hidden="true" /> : null}
      {hasLeadingIcon ? (
        <span className="o9-button-icon-wrap" aria-hidden="true">
          {leadingIcon || <CloseIcon size={sizeTokens.icon} color={tone.icon} />}
        </span>
      ) : null}
      <span className="o9-button-label">{label}</span>
    </button>
  );
}

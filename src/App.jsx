import { useState } from "react";
import { O9Button } from "./components/O9Button";

const variants = [
  "primary",
  "secondary",
  "tertiary",
  "outline",
  "danger-primary",
  "danger-tertiary",
  "danger-outline",
];

const sizes = ["small", "medium", "large"];
const stateOptions = ["auto", "enable", "hover", "focus-visible", "active"];

function formatVariantLabel(variant) {
  return variant
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function App() {
  const [label, setLabel] = useState("Button");
  const [size, setSize] = useState("medium");
  const [showIcon, setShowIcon] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [stateMode, setStateMode] = useState("auto");

  return (
    <main className="button-playground-page">
      <header className="button-playground-header">
        <p>Figma MCP Implementation</p>
        <h1>o9 Button Playground</h1>
        <span>
          One live preview per variant with interactive hover, focus, and press behavior plus in-page
          prop controls.
        </span>
      </header>

      <section className="playground-controls" aria-label="Button controls">
        <div className="control-group control-group-wide">
          <label htmlFor="button-label">Label</label>
          <input
            id="button-label"
            className="control-input"
            value={label}
            onChange={(event) => setLabel(event.target.value)}
            placeholder="Button"
          />
        </div>

        <div className="control-group">
          <span>Size</span>
          <div className="segmented-control">
            {sizes.map((option) => (
              <button
                key={option}
                type="button"
                className={`segment ${size === option ? "segment-active" : ""}`}
                onClick={() => setSize(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <span>State</span>
          <div className="segmented-control segmented-control-wrap">
            {stateOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={`segment ${stateMode === option ? "segment-active" : ""}`}
                onClick={() => setStateMode(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <label className="toggle-control">
          <input
            type="checkbox"
            checked={showIcon}
            onChange={(event) => setShowIcon(event.target.checked)}
          />
          <span>Leading icon</span>
        </label>

        <label className="toggle-control">
          <input
            type="checkbox"
            checked={isDisabled}
            onChange={(event) => setIsDisabled(event.target.checked)}
          />
          <span>Disabled</span>
        </label>
      </section>

      <section className="variant-grid" aria-label="Button variants">
        {variants.map((variant) => (
          <article key={variant} className="variant-card">
            <div className="variant-card-head">
              <h2>{formatVariantLabel(variant)}</h2>
              <span>{variant}</span>
            </div>

            <div className="variant-preview">
              <O9Button
                label={label || "Button"}
                variant={variant}
                size={size}
                hasLeadingIcon={showIcon}
                isDisabled={isDisabled}
                previewState={stateMode === "auto" ? null : stateMode}
                interactive={stateMode === "auto"}
              />
            </div>

            <div className="variant-meta">
              <span>{`size: ${size}`}</span>
              <span>{`icon: ${showIcon ? "on" : "off"}`}</span>
              <span>{`state: ${isDisabled ? "disabled" : stateMode}`}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

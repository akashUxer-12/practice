import { useState } from "react";
import { O9Button } from "./components/O9Button";
import { O9Banner } from "./components/O9Banner";

const buttonVariants = [
  "primary",
  "secondary",
  "tertiary",
  "outline",
  "danger-primary",
  "danger-tertiary",
  "danger-outline",
];

const buttonSizes = ["small", "medium", "large"];
const buttonStateOptions = ["auto", "enable", "hover", "focus-visible", "active"];
const bannerVariants = ["negative", "warning", "info", "positive", "block", "neutral"];
const componentTabs = [
  { id: "button", label: "Button" },
  { id: "banner", label: "o9ds Banner" },
];

function formatVariantLabel(variant) {
  return variant
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function App() {
  const [activeComponent, setActiveComponent] = useState("button");

  const [label, setLabel] = useState("Button");
  const [size, setSize] = useState("medium");
  const [showIcon, setShowIcon] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [stateMode, setStateMode] = useState("auto");

  const [bannerTitle, setBannerTitle] = useState("Alert title");
  const [bannerMessage, setBannerMessage] = useState(
    "The :o9 favourite service is not available at the moment and a few UI features",
  );
  const [bannerVariant, setBannerVariant] = useState("negative");
  const [bannerCompact, setBannerCompact] = useState(false);
  const [bannerShowTitle, setBannerShowTitle] = useState(true);
  const [bannerShowLink, setBannerShowLink] = useState(true);
  const [bannerShowAction, setBannerShowAction] = useState(true);
  const [bannerShowBottomButton, setBannerShowBottomButton] = useState(true);
  const [bannerShowClose, setBannerShowClose] = useState(true);

  return (
    <main className="component-shell">
      <aside className="component-sidebar">
        <div className="sidebar-brand">
          <p>Figma MCP</p>
          <h1>Component Lab</h1>
        </div>

        <nav className="sidebar-nav" aria-label="Component switcher">
          {componentTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`sidebar-link ${activeComponent === tab.id ? "sidebar-link-active" : ""}`}
              onClick={() => setActiveComponent(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </aside>

      <section className="component-main">
        {activeComponent === "button" ? (
          <>
            <header className="playground-header">
              <p>o9ds-btn</p>
              <h2>Interactive Button Playground</h2>
              <span>
                One live preview per variant with hover, focus, and pressed behavior plus prop controls.
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
                  {buttonSizes.map((option) => (
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
                  {buttonStateOptions.map((option) => (
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
              {buttonVariants.map((variant) => (
                <article key={variant} className="variant-card">
                  <div className="variant-card-head">
                    <h3>{formatVariantLabel(variant)}</h3>
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
          </>
        ) : (
          <>
            <header className="playground-header">
              <p>o9ds Banner</p>
              <h2>Interactive Banner Playground</h2>
              <span>
                Toggle compact mode, title, link, actions, and semantic variant while previewing the
                banner component from Figma.
              </span>
            </header>

            <section className="playground-controls banner-controls" aria-label="Banner controls">
              <div className="control-group control-group-wide">
                <label htmlFor="banner-title">Title</label>
                <input
                  id="banner-title"
                  className="control-input"
                  value={bannerTitle}
                  onChange={(event) => setBannerTitle(event.target.value)}
                  placeholder="Alert title"
                />
              </div>

              <div className="control-group control-group-wide">
                <label htmlFor="banner-message">Message</label>
                <input
                  id="banner-message"
                  className="control-input"
                  value={bannerMessage}
                  onChange={(event) => setBannerMessage(event.target.value)}
                  placeholder="Banner message"
                />
              </div>

              <div className="control-group">
                <span>Variant</span>
                <div className="segmented-control segmented-control-wrap">
                  {bannerVariants.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`segment ${bannerVariant === option ? "segment-active" : ""}`}
                      onClick={() => setBannerVariant(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <label className="toggle-control">
                <input
                  type="checkbox"
                  checked={bannerCompact}
                  onChange={(event) => setBannerCompact(event.target.checked)}
                />
                <span>Compact</span>
              </label>

              <label className="toggle-control">
                <input
                  type="checkbox"
                  checked={bannerShowTitle}
                  onChange={(event) => setBannerShowTitle(event.target.checked)}
                />
                <span>Title</span>
              </label>

              <label className="toggle-control">
                <input
                  type="checkbox"
                  checked={bannerShowLink}
                  onChange={(event) => setBannerShowLink(event.target.checked)}
                />
                <span>Link</span>
              </label>

              <label className="toggle-control">
                <input
                  type="checkbox"
                  checked={bannerShowAction}
                  onChange={(event) => setBannerShowAction(event.target.checked)}
                />
                <span>Right action</span>
              </label>

              <label className="toggle-control">
                <input
                  type="checkbox"
                  checked={bannerShowBottomButton}
                  onChange={(event) => setBannerShowBottomButton(event.target.checked)}
                />
                <span>Bottom button</span>
              </label>

              <label className="toggle-control">
                <input
                  type="checkbox"
                  checked={bannerShowClose}
                  onChange={(event) => setBannerShowClose(event.target.checked)}
                />
                <span>Close icon</span>
              </label>
            </section>

            <section className="banner-preview-grid" aria-label="Banner preview">
              <article className="banner-preview-card">
                <div className="variant-card-head">
                  <h3>Live Preview</h3>
                  <span>{bannerVariant}</span>
                </div>
                <div className="banner-preview-stage">
                  <O9Banner
                    variant={bannerVariant}
                    title={bannerTitle || "Alert title"}
                    message={bannerMessage || "The :o9 favourite service is not available at the moment and a few UI features"}
                    compact={bannerCompact}
                    showTitle={bannerShowTitle}
                    showLink={bannerShowLink}
                    showActionButton={bannerShowAction}
                    showBottomButton={bannerShowBottomButton}
                    showClose={bannerShowClose}
                    actionLabel="Button"
                  />
                </div>
              </article>

              <article className="banner-preview-card">
                <div className="variant-card-head">
                  <h3>Variant Set</h3>
                  <span>all semantic states</span>
                </div>
                <div className="banner-stack">
                  {bannerVariants.map((variant) => (
                    <O9Banner
                      key={variant}
                      variant={variant}
                      title={bannerTitle || "Alert title"}
                      message={bannerMessage || "The :o9 favourite service is not available at the moment and a few UI features"}
                      compact={bannerCompact}
                      showTitle={bannerShowTitle}
                      showLink={bannerShowLink}
                      showActionButton={bannerShowAction}
                      showBottomButton={bannerShowBottomButton}
                      showClose={bannerShowClose}
                      actionLabel="Button"
                    />
                  ))}
                </div>
              </article>
            </section>
          </>
        )}
      </section>
    </main>
  );
}

import { O9Button } from "./O9Button";

const VARIANT_TOKENS = {
  negative: {
    border: "#bc1227",
    title: "#bc1227",
    icon: "#bc1227",
  },
  warning: {
    border: "#926200",
    title: "#926200",
    icon: "#926200",
  },
  info: {
    border: "#0037ff",
    title: "#002ed2",
    icon: "#0037ff",
  },
  positive: {
    border: "#0c7951",
    title: "#0c7951",
    icon: "#0c7951",
  },
  block: {
    border: "#bc1227",
    title: "#bc1227",
    icon: "#bc1227",
  },
  neutral: {
    border: "#010101",
    title: "#010101",
    icon: "#010101",
  },
};

function BannerIcon({ variant }) {
  const color = VARIANT_TOKENS[variant]?.icon || "#010101";

  if (variant === "warning") {
    return (
      <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
        <path d="M8 2.2 14.3 13H1.7L8 2.2Zm0 3.1-.9 3.8h1.8L8 5.3Zm0 6a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z" fill={color} />
      </svg>
    );
  }

  if (variant === "info") {
    return (
      <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
        <path d="M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm0 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm1 3H7v4h2v-4Z" fill={color} />
      </svg>
    );
  }

  if (variant === "positive") {
    return (
      <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
        <path d="M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm3.05 4.55-.88-.88L7.1 8.24 5.82 6.96l-.88.88L7.1 10l3.95-3.95Z" fill={color} />
      </svg>
    );
  }

  if (variant === "neutral") {
    return (
      <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
        <path d="M2.7 9.7V6.3h2.1l3-2.4v8.2l-3-2.4H2.7Zm6.4-3.2a3.3 3.3 0 0 1 0 3l-.8-.5a2.4 2.4 0 0 0 0-2l.8-.5Zm1.7-1.4a5 5 0 0 1 0 5.8l-.8-.5a4 4 0 0 0 0-4.8l.8-.5Z" fill={color} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <path d="M8 1.5a6.5 6.5 0 1 1 0 13A6.5 6.5 0 0 1 8 1.5Zm2.65 4.77L9.73 5.35 8 7.1 6.27 5.35l-.92.92L7.1 8l-1.75 1.73.92.92L8 8.9l1.73 1.75.92-.92L8.9 8l1.75-1.73Z" fill={color} />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <path d="M4.8 4.8 11.2 11.2M11.2 4.8 4.8 11.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function O9Banner({
  variant = "negative",
  title = "Alert title",
  message = "The :o9 favourite service is not available at the moment and a few UI features",
  compact = false,
  showTitle = true,
  showLink = true,
  showActionButton = true,
  showBottomButton = true,
  showClose = true,
  actionLabel = "Button",
  linkLabel = "Read more about this",
}) {
  const tone = VARIANT_TOKENS[variant] || VARIANT_TOKENS.negative;
  const rootStyle = {
    "--banner-border": tone.border,
    "--banner-title": tone.title,
  };

  return (
    <section className={`o9-banner ${compact ? "o9-banner-compact" : ""}`} style={rootStyle}>
      <div className="o9-banner-icon-area">
        <BannerIcon variant={variant} />
      </div>

      <div className="o9-banner-copy">
        {!compact ? (
          <>
            <div className="o9-banner-copy-block">
              {showTitle ? <h3 className="o9-banner-title">{title}</h3> : null}
              <p className="o9-banner-message">{message}</p>
            </div>

            {showBottomButton ? (
              <div className="o9-banner-bottom-button">
                <O9Button
                  label={actionLabel}
                  variant={variant.includes("danger") ? "danger-outline" : "outline"}
                  size="small"
                  hasLeadingIcon={false}
                  interactive={false}
                />
              </div>
            ) : null}

            {showLink ? (
              <button type="button" className="o9-banner-link">
                {linkLabel}
              </button>
            ) : null}
          </>
        ) : (
          <p className="o9-banner-message o9-banner-message-compact">{message}</p>
        )}
      </div>

      <div className="o9-banner-actions">
        {!compact && showActionButton ? (
          <O9Button
            label={actionLabel}
            variant={variant.includes("danger") ? "danger-outline" : "outline"}
            size="small"
            hasLeadingIcon={false}
            interactive={false}
          />
        ) : null}
        {showClose ? (
          <button type="button" className="o9-banner-close" aria-label="Close banner">
            <CloseIcon />
          </button>
        ) : null}
      </div>
    </section>
  );
}

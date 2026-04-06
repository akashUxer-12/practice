const CheckIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className="path-check-icon">
    <path
      d="M6.55 11.2 3.5 8.15l.95-.95 2.1 2.1 4.98-4.98.95.95-5.93 5.93Z"
      fill="currentColor"
    />
  </svg>
);

const ChevronIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 14 14" className="path-chevron-icon">
    <path
      d="m5.18 11.53-.88-.88L7.95 7 4.3 3.35l.88-.88L9.7 7l-4.52 4.53Z"
      fill="currentColor"
    />
  </svg>
);

function PathStep({ label, kind, isFirst, isLast }) {
  const className = [
    "path-step",
    kind === "done" ? "path-step-done" : "",
    kind === "current" ? "path-step-current" : "",
    kind === "upcoming" ? "path-step-upcoming" : "",
    isFirst ? "path-step-first" : "",
    isLast ? "path-step-last" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <div className="path-step-main">
        {kind === "done" ? <CheckIcon /> : <span className="path-step-label">{label}</span>}
      </div>
    </div>
  );
}

export function PathCoachingCard({
  title,
  buttonLabel,
  guidanceTitle,
  guidanceItems,
  steps,
}) {
  return (
    <section className="card" aria-label="Path coaching card">
      <div className="path-row">
        <button className="icon-button" type="button" aria-label="Next stage">
          <ChevronIcon />
        </button>

        <div className="path-steps" aria-label="Progress stages">
          {steps.map((step, index) => (
            <PathStep
              key={`${step.label}-${index}`}
              label={step.label}
              kind={step.kind}
              isFirst={index === 0}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>

      <div className="status-row">
        <h2 className="status-title">{title}</h2>
        <button className="brand-button" type="button">
          {buttonLabel}
        </button>
      </div>

      <div className="guidance-block">
        <h3 className="guidance-title">{guidanceTitle}</h3>
        <ul className="guidance-list">
          {guidanceItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

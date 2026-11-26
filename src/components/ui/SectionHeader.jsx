/**
 * Reusable section header with eyebrow label, display heading,
 * and optional right-aligned action or description.
 */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = 'left',
  className = '',
}) {
  const isCentered = align === 'center';

  return (
    <div
      className={`${
        isCentered
          ? 'mx-auto max-w-2xl text-center'
          : 'flex flex-col justify-between gap-6 lg:flex-row lg:items-end'
      } ${className}`.trim()}
    >
      <div>
        {eyebrow && (
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-normal leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
          {title}
        </h2>
      </div>

      {description && !isCentered && (
        <p className="max-w-sm text-sm leading-relaxed text-muted">{description}</p>
      )}
      {description && isCentered && (
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">{description}</p>
      )}
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

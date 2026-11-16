import { useId } from 'react';

const baseClasses =
  'block min-h-12 w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted/80 disabled:cursor-not-allowed disabled:bg-surface disabled:opacity-70';

export default function Input({
  label,
  helperText,
  error,
  id,
  className = '',
  ...props
}) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const descriptionId = `${inputId}-description`;
  const message = error || helperText;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-primary">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`${baseClasses} ${
          error
            ? 'border-red-600 focus:border-red-600 focus:ring-2 focus:ring-red-600/15'
            : 'border-primary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20'
        } ${className}`.trim()}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={message ? descriptionId : undefined}
        {...props}
      />
      {message && (
        <p
          id={descriptionId}
          className={`mt-2 text-xs leading-5 ${error ? 'text-red-700' : 'text-muted'}`}
          role={error ? 'alert' : undefined}
        >
          {message}
        </p>
      )}
    </div>
  );
}

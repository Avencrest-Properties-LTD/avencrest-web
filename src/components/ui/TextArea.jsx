import { useId } from 'react';

const baseClasses =
  'block min-h-32 w-full resize-y rounded-lg border bg-white px-4 py-3 text-sm leading-6 text-ink outline-none transition placeholder:text-muted/80 disabled:cursor-not-allowed disabled:bg-surface disabled:opacity-70';

export default function TextArea({
  label,
  helperText,
  error,
  id,
  className = '',
  ...props
}) {
  const generatedId = useId();
  const textAreaId = id || generatedId;
  const descriptionId = `${textAreaId}-description`;
  const message = error || helperText;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={textAreaId} className="mb-2 block text-sm font-medium text-primary">
          {label}
        </label>
      )}
      <textarea
        id={textAreaId}
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

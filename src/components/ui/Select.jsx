import { useId } from 'react';
import { ChevronDown } from 'lucide-react';

const baseClasses =
  'block min-h-12 w-full appearance-none rounded-lg border bg-white py-3 pl-4 pr-11 text-sm text-ink outline-none transition disabled:cursor-not-allowed disabled:bg-surface disabled:opacity-70';

export default function Select({
  label,
  helperText,
  error,
  id,
  className = '',
  children,
  ...props
}) {
  const generatedId = useId();
  const selectId = id || generatedId;
  const descriptionId = `${selectId}-description`;
  const message = error || helperText;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={selectId} className="mb-2 block text-sm font-medium text-primary">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={`${baseClasses} ${
            error
              ? 'border-red-600 focus:border-red-600 focus:ring-2 focus:ring-red-600/15'
              : 'border-primary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20'
          } ${className}`.trim()}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={message ? descriptionId : undefined}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          aria-hidden="true"
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-primary"
        />
      </div>
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

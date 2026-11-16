import { useId, useState } from 'react';
import { FileUp } from 'lucide-react';

export default function FileUpload({
  label,
  helperText,
  error,
  id,
  className = '',
  onChange,
  disabled,
  ...props
}) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const descriptionId = `${inputId}-description`;
  const message = error || helperText;
  const [fileNames, setFileNames] = useState([]);

  function handleChange(event) {
    setFileNames(Array.from(event.currentTarget.files || [], (file) => file.name));
    onChange?.(event);
  }

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-primary">
          {label}
        </label>
      )}
      <div
        className={`relative flex min-h-32 flex-col items-center justify-center rounded-xl border border-dashed bg-surface px-5 py-6 text-center transition focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20 ${
          error ? 'border-red-600' : 'border-primary/25'
        } ${disabled ? 'cursor-not-allowed opacity-60' : 'hover:border-secondary'} ${className}`.trim()}
      >
        <input
          {...props}
          id={inputId}
          type="file"
          disabled={disabled}
          onChange={handleChange}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={message ? descriptionId : undefined}
        />
        <FileUp aria-hidden="true" size={22} className="mb-2 text-primary" />
        <span aria-live="polite" className="break-all text-sm font-medium text-primary">
          {fileNames.length
            ? fileNames.join(', ')
            : 'Choose file(s) or drag them here'}
        </span>
        <span className="mt-1 text-xs text-muted">Browse to select from your device</span>
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

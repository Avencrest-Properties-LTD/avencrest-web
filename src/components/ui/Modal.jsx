import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { X } from 'lucide-react';

export default function Modal({
  open,
  onClose,
  title = 'Dialog',
  description,
  children,
  footer,
  className = '',
}) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-primary/55 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
        <DialogPanel
          className={`relative my-auto w-full max-w-lg rounded-2xl border border-primary/10 bg-white p-6 text-ink shadow-soft sm:p-8 ${className}`.trim()}
        >
          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0">
              <DialogTitle className="font-display text-xl font-semibold text-primary sm:text-2xl">
                {title}
              </DialogTitle>
              {description && (
                <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-primary/5 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              aria-label="Close dialog"
            >
              <X aria-hidden="true" size={18} />
            </button>
          </div>
          <div className="mt-6">{children}</div>
          {footer && <div className="mt-6 border-t border-primary/10 pt-5">{footer}</div>}
        </DialogPanel>
      </div>
    </Dialog>
  );
}

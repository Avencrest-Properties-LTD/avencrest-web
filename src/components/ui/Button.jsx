import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const buttonVariants = {
  primary:
    'rounded-full border-transparent bg-[#EC8926] text-white hover:bg-[#d97b1e] focus-visible:outline-[#EC8926]',
  white:
    'rounded-full border-transparent bg-white text-primary shadow-sm hover:bg-surface focus-visible:outline-primary',
  green:
    'rounded-md border-transparent bg-primary text-white hover:bg-[#002f28] focus-visible:outline-primary',
  outline:
    'rounded-full border-primary/25 bg-transparent text-primary hover:bg-primary/5 focus-visible:outline-primary',
  secondary:
    'rounded-full border-primary/25 bg-transparent text-primary hover:bg-primary/5 focus-visible:outline-primary',
  ghost:
    'border-transparent bg-transparent !px-0 text-primary hover:text-[#EC8926] focus-visible:outline-primary',
  'ghost-light':
    'border-transparent bg-transparent !px-0 text-white hover:text-[#EC8926] focus-visible:outline-white',
};

const buttonSizes = {
  default: 'min-h-[48px] gap-2.5 px-7 py-3 text-[15px]',
  compact: 'min-h-[40px] gap-2 px-5 py-2 text-sm',
  lg: 'min-h-[56px] gap-3 px-9 py-3.5 text-base',
  tiny: 'min-h-[32px] gap-1.5 px-3.5 py-1.5 text-xs',
};

/**
 * Reusable Button component supporting primary orange pill, white pill,
 * outline, and minimal text+arrow (ghost) variants.
 */
export default function Button({
  children,
  variant = 'primary',
  showArrow = true,
  size = 'default',
  type = 'button',
  className = '',
  href,
  to,
  ...props
}) {
  const arrowSize =
    size === 'tiny'
      ? 'h-3.5 w-3.5'
      : size === 'compact'
        ? 'h-4 w-4'
        : 'h-[18px] w-[18px]';

  const classes = [
    'group inline-flex max-w-full items-center justify-center border text-center font-normal leading-none transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60',
    buttonSizes[size] ?? buttonSizes.default,
    buttonVariants[variant] ?? buttonVariants.primary,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          aria-hidden="true"
          className={`${arrowSize} shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5`}
          strokeWidth={1.75}
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}

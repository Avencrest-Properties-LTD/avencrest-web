import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const outlineClasses =
  'border-white/90 bg-transparent text-white hover:bg-white/10 focus-visible:outline-white';
const buttonVariants = {
  primary: 'border-transparent bg-white text-primary hover:bg-white/90 focus-visible:outline-white',
  outline: outlineClasses,
  secondary: outlineClasses,
};
const buttonSizes = {
  default:
    'min-h-[80px] w-[410px] gap-3 px-12 text-[20px] max-[480px]:min-h-[68px] max-[480px]:px-7 max-[480px]:text-[16px]',
  compact:
    'min-h-[44px] w-auto gap-[9px] px-[22px] text-[10px] tracking-[0.035em] max-[480px]:min-h-[42px] max-[480px]:px-4 max-[480px]:text-[9px]',
  tiny: 'min-h-5 w-auto gap-[5px] px-2.5 text-[6px] tracking-[0.025em]',
};

export default function Button({
  children,
  variant = 'primary',
  showArrow = variant === 'primary',
  size = 'default',
  type = 'button',
  className = '',
  href,
  to,
  ...props
}) {
  const arrowSize = size === 'tiny' ? 'h-2 w-2' : size === 'compact' ? 'h-[13px] w-[13px]' : 'h-5 w-5';
  const classes = [
    'inline-flex max-w-full items-center justify-center rounded-full border text-center font-medium uppercase leading-none transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60',
    buttonSizes[size],
    buttonVariants[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowUpRight aria-hidden="true" className={`${arrowSize} shrink-0`} strokeWidth={2} />}
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

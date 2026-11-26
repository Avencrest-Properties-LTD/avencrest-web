import avLogo from '../../assets/images/branding/Avlogo.png';

/**
 * Animated Avencrest brand-logo loader component.
 * Can be rendered as a full-screen global overlay or inline block.
 */
export default function BuildingLoader({
  fullScreen = true,
  message = 'Shaping your space...',
  className = '',
}) {
  const wrapperClass = fullScreen
    ? 'fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F7F6F2]/95 px-6 backdrop-blur-md'
    : 'flex w-full flex-col items-center justify-center px-6 py-16';

  const logoMaskStyle = {
    WebkitMaskImage: `url(${avLogo})`,
    maskImage: `url(${avLogo})`,
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
  };

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={message}
      className={`${wrapperClass} ${className}`.trim()}
    >
      <div className="relative flex flex-col items-center">
        {/* Orbiting architectural precision arcs + floating logo */}
        <div className="relative flex h-40 w-40 items-center justify-center sm:h-44 sm:w-44">
          <svg
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {/* Outer warm-gold rotating arc */}
            <circle
              cx="90"
              cy="90"
              r="82"
              stroke="#D7A02A"
              strokeOpacity="0.45"
              strokeWidth="1.5"
              strokeDasharray="110 80 35 80"
              strokeLinecap="round"
              className="av-ring-spin"
            />
            {/* Inner emerald counter-rotating arc */}
            <circle
              cx="90"
              cy="90"
              r="72"
              stroke="#003B31"
              strokeOpacity="0.22"
              strokeWidth="1.25"
              strokeDasharray="70 110 40 110"
              strokeLinecap="round"
              className="av-ring-spin-reverse"
            />
          </svg>

          {/* Subtle ambient glow behind emblem */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute h-24 w-24 rounded-full bg-[#D7A02A]/15 blur-xl"
          />

          {/* Actual Avencrest emblem with masked metallic gold shimmer */}
          <div className="av-logo-float relative h-48 w-48 sm:h-32 sm:w-40">
            <img
              src={avLogo}
              alt="Avencrest"
              className="h-full w-full object-contain drop-shadow-[0_10px_20px_rgba(0,59,49,0.18)]"
            />
            <div
              aria-hidden="true"
              style={logoMaskStyle}
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >
              <div className="av-logo-shimmer h-full w-1/2 bg-gradient-to-r from-transparent via-[#F3C76B]/70 to-transparent" />
            </div>
          </div>
        </div>

        {/* Brand wordmark */}
        <p className="mt-3 font-display text-xs uppercase tracking-[0.28em] text-primary">
          Avencrest
        </p>
      </div>
    </div>
  );
}

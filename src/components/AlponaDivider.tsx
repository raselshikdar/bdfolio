const AlponaDivider = ({ className = "" }: { className?: string }) => (
  <div className={`w-full overflow-hidden ${className}`}>
    <svg
      viewBox="0 0 1200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-8 text-primary/10"
      preserveAspectRatio="none"
    >
      {/* Alpona-inspired geometric motif */}
      {Array.from({ length: 20 }).map((_, i) => (
        <g key={i} transform={`translate(${i * 60}, 0)`}>
          <path
            d="M30 0 L45 20 L30 40 L15 20 Z"
            fill="currentColor"
          />
          <circle cx="30" cy="20" r="6" fill="currentColor" opacity="0.5" />
          <path
            d="M0 20 L15 10 L15 30 Z"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M60 20 L45 10 L45 30 Z"
            fill="currentColor"
            opacity="0.3"
          />
        </g>
      ))}
    </svg>
  </div>
);

export default AlponaDivider;

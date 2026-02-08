interface WaveDividerProps {
  className?: string;
  flip?: boolean;
  color?: string;
}

export const WaveDivider = ({ className = "", flip = false, color = "#F5F0E8" }: WaveDividerProps) => (
  <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`} aria-hidden="true">
    <svg
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      className="w-full h-[40px] md:h-[60px]"
    >
      <path
        d="M0,40 C200,70 400,10 600,40 C800,70 1000,10 1200,40 L1200,80 L0,80 Z"
        fill={color}
      />
    </svg>
  </div>
);

export const GentleWave = ({ className = "", color = "#F5F0E8" }: Omit<WaveDividerProps, 'flip'>) => (
  <div className={`w-full overflow-hidden leading-[0] ${className}`} aria-hidden="true">
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className="w-full h-[30px] md:h-[50px]"
    >
      <path
        d="M0,30 C360,50 720,10 1080,30 C1260,40 1380,35 1440,30 L1440,60 L0,60 Z"
        fill={color}
        opacity="0.5"
      />
      <path
        d="M0,35 C480,55 960,15 1440,35 L1440,60 L0,60 Z"
        fill={color}
      />
    </svg>
  </div>
);

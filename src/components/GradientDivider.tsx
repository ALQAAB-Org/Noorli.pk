const GradientDivider = () => {
  return (
    <div className="relative w-full py-8">
      {/* Main gradient line */}
      <div className="relative h-1 w-full overflow-hidden rounded-full">
        <div 
          className="absolute inset-0 animate-shimmer"
          style={{
            background: 'var(--gradient-rainbow)',
            backgroundSize: '200% 100%',
          }}
        />
      </div>
      
      {/* Decorative dots */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-primary animate-pulse-soft" />
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse-soft animation-delay-100" />
        <div className="w-4 h-4 rounded-full border-2 border-primary bg-background flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-accent" />
        </div>
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse-soft animation-delay-200" />
        <div className="w-3 h-3 rounded-full bg-primary animate-pulse-soft animation-delay-300" />
      </div>

      {/* Glow effect */}
      <div 
        className="absolute inset-0 blur-xl opacity-30"
        style={{ background: 'var(--gradient-rainbow)' }}
      />
    </div>
  );
};

export default GradientDivider;

export function ShinyText({ text, disabled = false, speed = 3, className = '' }: { text: string, disabled?: boolean, speed?: number, className?: string }) {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-[#14452F]/70 bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(20, 69, 47, 0.7) 40%, rgba(20, 69, 47, 1) 50%, rgba(20, 69, 47, 0.7) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
}

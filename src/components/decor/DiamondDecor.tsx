interface DiamondDecorProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function DiamondDecor({
  size = 14,
  color = "#ce93d8",
  className,
}: DiamondDecorProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M12 1L3 9l9 14 9-14z" />
    </svg>
  );
}

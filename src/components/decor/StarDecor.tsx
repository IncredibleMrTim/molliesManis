interface StarDecorProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function StarDecor({ size = 16, color = "#e91e8c", className }: StarDecorProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

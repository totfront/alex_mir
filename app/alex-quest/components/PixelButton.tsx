import { useState } from 'react';
import { C, FONT_PIXEL } from '../lib/theme';

interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  small?: boolean;
  title?: string;
}

export function PixelButton({ children, onClick, color = C.magenta, small, title }: PixelButtonProps) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      title={title}
      style={{
        fontFamily: FONT_PIXEL,
        fontSize: small ? 9 : 12,
        lineHeight: 1.6,
        color: hover ? C.night : color,
        background: hover ? color : 'transparent',
        border: `3px solid ${color}`,
        padding: small ? '8px 12px' : '14px 20px',
        cursor: 'pointer',
        boxShadow: hover ? `0 0 0 0 ${color}` : `4px 4px 0 0 ${color}`,
        transform: hover ? 'translate(4px,4px)' : 'none',
        transition: 'all .08s steps(2)',
        textTransform: 'uppercase',
        letterSpacing: 1,
      }}
    >
      {children}
    </button>
  );
}

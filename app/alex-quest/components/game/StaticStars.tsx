import { useRef } from 'react';
import { W } from '../../lib/game-config';

interface Star { x: number; y: number; s: number; o: number }

export function StaticStars() {
  const stars = useRef<Star[]>(
    Array.from({ length: 36 }, () => ({
      x: Math.random() * W,
      y: Math.random() * 180,
      s: Math.random() * 2 + 1,
      o: Math.random() * 0.5 + 0.3,
    }))
  );
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {stars.current.map((st, i) => (
        <div
          key={i}
          style={{ position: 'absolute', left: st.x, top: st.y, width: st.s, height: st.s, background: '#fff', opacity: st.o }}
        />
      ))}
    </div>
  );
}

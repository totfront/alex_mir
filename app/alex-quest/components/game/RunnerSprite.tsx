import { C } from '../../lib/theme';
import { ALEX_W, ALEX_H } from '../../lib/game-config';

interface RunnerSpriteProps {
  frame: number;
  grounded: boolean;
}

export function RunnerSprite({ frame, grounded }: RunnerSpriteProps) {
  const step = grounded ? Math.floor(frame / 8) % 2 : 0;
  return (
    <div style={{ position: 'relative', width: ALEX_W, height: ALEX_H, imageRendering: 'pixelated' }}>
      {/* head */}
      <div style={{ position: 'absolute', left: 9, top: 0, width: 16, height: 14, background: '#f0c9a0', border: '2px solid #2a1d52' }} />
      {/* hair */}
      <div style={{ position: 'absolute', left: 9, top: 0, width: 16, height: 5, background: '#3a2a1a' }} />
      {/* torso */}
      <div style={{ position: 'absolute', left: 6, top: 14, width: 22, height: 16, background: C.magenta, border: '2px solid #2a1d52' }} />
      {/* left leg */}
      <div style={{ position: 'absolute', left: 9, top: 30, width: 6, height: 10, background: C.cyan, transform: step ? 'translateX(-3px)' : 'translateX(0)' }} />
      {/* right leg */}
      <div style={{ position: 'absolute', left: 19, top: 30, width: 6, height: 10, background: C.cyan, transform: step ? 'translateX(3px)' : 'translateX(0)' }} />
    </div>
  );
}

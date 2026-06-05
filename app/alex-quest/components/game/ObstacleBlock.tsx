import { C, FONT_PIXEL, FONT_BODY } from '../../lib/theme';
import { GROUND_Y, ALEX_H, OBSTACLE_W, OBSTACLE_H, H } from '../../lib/game-config';
import type { ObstacleState } from '../../hooks/use-game-loop';

interface ObstacleBlockProps {
  obstacle: ObstacleState;
  screenX: number;
}

export function ObstacleBlock({ obstacle: o, screenX: sx }: ObstacleBlockProps) {
  return (
    <div style={{ position: 'absolute', left: sx, top: 0, width: OBSTACLE_W, height: H }}>
      <div style={{ position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)', width: 150, textAlign: 'center' }}>
        <div style={{ fontFamily: FONT_PIXEL, fontSize: 7.5, color: o.color, lineHeight: 1.5, textShadow: `2px 2px 0 ${C.nightDeep}` }}>
          {o.title}
        </div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: C.ink, marginTop: 4 }}>{o.hint}</div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: GROUND_Y + ALEX_H - OBSTACLE_H,
          left: 0,
          width: OBSTACLE_W,
          height: OBSTACLE_H,
          background: C.panel,
          border: `3px solid ${o.color}`,
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          opacity: o.hit ? 0.3 : 1,
        }}
      >
        {o.icon}
      </div>
    </div>
  );
}

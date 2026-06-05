import { C, FONT_PIXEL, FONT_BODY } from '../../lib/theme';
import type { BannerState } from '../../hooks/use-game-loop';

export function StoryBanner({ banner }: { banner: BannerState }) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 12,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '88%',
        maxWidth: 560,
        background: C.panel,
        border: `2px solid ${banner.color}`,
        padding: '10px 14px',
        boxShadow: `4px 4px 0 ${C.nightDeep}`,
      }}
    >
      <div style={{ fontFamily: FONT_PIXEL, fontSize: 7.5, color: banner.color, marginBottom: 5 }}>
        🏆 {banner.title}
      </div>
      <div style={{ fontFamily: FONT_BODY, fontSize: 13.5, color: C.ink, lineHeight: 1.5 }}>
        {banner.story}
      </div>
    </div>
  );
}

import { C, FONT_BODY } from '../../lib/theme';
import { PixelButton } from '../PixelButton';

function isTouch() {
  return typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
}

interface GameHintBarProps {
  running: boolean;
  onJump: () => void;
}

export function GameHintBar({ running, onJump }: GameHintBarProps) {
  return (
    <div
      style={{
        width: '100%',
        marginTop: 12,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: C.inkDim }}>
        {isTouch() ? 'Tap anywhere to jump' : 'SPACE / ↑ / tap to jump'}
      </div>
      {running && (
        <PixelButton small color={C.green} onClick={onJump}>↑ JUMP</PixelButton>
      )}
    </div>
  );
}

import { C, FONT_PIXEL } from '../../lib/theme';
import { MILESTONES } from '../../data/milestones';
import { PixelButton } from '../PixelButton';

interface GameTopBarProps {
  cleared: number;
  onDirect: () => void;
  onSkip: () => void;
  onExit: () => void;
}

export function GameTopBar({ cleared, onDirect, onSkip, onExit }: GameTopBarProps) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 8px',
        gap: 8,
      }}
    >
      <div style={{ fontFamily: FONT_PIXEL, fontSize: 9, color: C.amber, letterSpacing: 1 }}>
        {`MILESTONES ${cleared}/${MILESTONES.length}`}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <PixelButton small color={C.cyan} onClick={onDirect} title="Jump to the plain CV">📄 CV</PixelButton>
        <PixelButton small color={C.amber} onClick={onSkip} title="Skip to contact">⏭ SKIP</PixelButton>
        <PixelButton small color={C.inkDim} onClick={onExit} title="Back to start">←</PixelButton>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { C, FONT_PIXEL, FONT_BODY } from '../lib/theme';
import { CV } from '../data/cv';

type Mode = 'entry' | 'direct' | 'game';

interface ModeCardProps {
  tag: string;
  title: string;
  desc: string;
  color: string;
  icon: string;
  onClick: () => void;
}

function ModeCard({ tag, title, desc, color, icon, onClick }: ModeCardProps) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: 'min(260px, 100%)',
        cursor: 'pointer',
        background: C.panel,
        border: `3px solid ${color}`,
        padding: 24,
        textAlign: 'left',
        boxShadow: hover ? `0 0 24px -2px ${color}` : `6px 6px 0 0 ${C.nightDeep}`,
        transform: hover ? 'translateY(-4px)' : 'none',
        transition: 'all .12s steps(3)',
      }}
    >
      <div style={{ fontSize: 34, marginBottom: 10 }}>{icon}</div>
      <div style={{ fontFamily: FONT_PIXEL, fontSize: 8, color, letterSpacing: 1 }}>{tag}</div>
      <div
        style={{
          fontFamily: FONT_PIXEL,
          fontSize: 18,
          color: C.ink,
          margin: '10px 0 12px',
          textShadow: `2px 2px 0 ${C.nightDeep}`,
        }}
      >
        {title}
      </div>
      <div style={{ fontFamily: FONT_BODY, fontSize: 14, color: C.inkDim, lineHeight: 1.5 }}>{desc}</div>
    </div>
  );
}

export function Entry({ onChoose }: { onChoose: (mode: Mode) => void }) {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 600);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: 560,
        gap: 8,
        padding: 12,
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 720, padding: '0 20px' }}>
        <div style={{ fontFamily: FONT_PIXEL, fontSize: 11, color: C.cyan, letterSpacing: 2 }}>
          PLAYER SELECT
        </div>
        <h1
          style={{
            fontFamily: FONT_PIXEL,
            fontSize: 'clamp(24px,6vw,46px)',
            color: C.ink,
            margin: '18px 0 6px',
            lineHeight: 1.3,
            textShadow: `4px 4px 0 ${C.magenta}, 8px 8px 0 ${C.nightDeep}`,
          }}
        >
          ALEX QUEST
        </h1>
        <div style={{ fontFamily: FONT_BODY, color: C.inkDim, fontSize: 16, marginBottom: 36 }}>
          You&apos;ve seen the CV. Now choose how you&apos;d like to meet {CV.name.split(' ')[0]}.
        </div>

        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
          <ModeCard
            tag="IN A HURRY?"
            title="DIRECT"
            desc="The CV, cleanly styled. Scan it, forward it, done."
            color={C.cyan}
            icon="📄"
            onClick={() => onChoose('direct')}
          />
          <ModeCard
            tag="GOT 3 MINUTES?"
            title="ENTERTAINING"
            desc="Walk Alex through his story. Arrow keys / tap to move."
            color={C.magenta}
            icon="🎮"
            onClick={() => onChoose('game')}
          />
        </div>

        <div
          style={{
            marginTop: 40,
            fontFamily: FONT_PIXEL,
            fontSize: 10,
            color: blink ? C.amber : 'transparent',
            letterSpacing: 2,
          }}
        >
          ▸ INSERT CURIOSITY TO CONTINUE ◂
        </div>
      </div>
    </div>
  );
}

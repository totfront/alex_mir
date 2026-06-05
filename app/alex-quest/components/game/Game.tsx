import { C, FONT_PIXEL, FONT_BODY, screenBase } from '../../lib/theme';
import { W, H, GROUND_Y, ALEX_H, ALEX_SCREEN_X, ALEX_W } from '../../lib/game-config';
import { CV } from '../../data/cv';
import { useGameLoop } from '../../hooks/use-game-loop';
import { useScaleToFit } from '../../hooks/use-scale-to-fit';
import { CRT } from '../CRT';
import { Overlay } from '../Overlay';
import { PixelButton } from '../PixelButton';
import { RunnerSprite } from './RunnerSprite';
import { StaticStars } from './StaticStars';
import { ObstacleBlock } from './ObstacleBlock';
import { StoryBanner } from './StoryBanner';
import { GameTopBar } from './GameTopBar';
import { GameHintBar } from './GameHintBar';

function isTouch() {
  return typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
}

interface GameProps {
  onExit: () => void;
  onDirect: () => void;
}

export function Game({ onExit, onDirect }: GameProps) {
  const { phase, cleared, banner, camOffset, obstacles, frame, grounded, alexY, finishX, jump, reset, skipToWin } = useGameLoop();
  const { ref: scaleRef, scale } = useScaleToFit(W);
  const running = phase === 'run';

  return (
    <div style={{ ...screenBase, justifyContent: 'flex-start', padding: '0 0 16px' }}>
      {/* Single column — everything aligns to the same max-width */}
      <div style={{ width: '100%', maxWidth: W, display: 'flex', flexDirection: 'column' }}>
        <GameTopBar cleared={cleared} onDirect={onDirect} onSkip={skipToWin} onExit={onExit} />

        {/* Clip wrapper — measured by ResizeObserver, height collapses with scale */}
        <div
          ref={scaleRef}
          onClick={jump}
          style={{
            width: '100%',
            height: H * scale,
            overflow: 'hidden',
            border: `3px solid ${C.line}`,
            cursor: running ? 'pointer' : 'default',
          }}
        >
          {/* Game world — always W×H, scaled down to fit clip wrapper */}
          <div
            style={{
              position: 'relative',
              width: W,
              height: H,
              background: C.night,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          >
            <StaticStars />

            {/* ground */}
            <div style={{ position: 'absolute', top: GROUND_Y + ALEX_H, left: 0, width: '100%', height: 4, background: C.magenta, opacity: 0.5 }} />
            <div style={{ position: 'absolute', top: GROUND_Y + ALEX_H + 4, left: 0, width: '100%', bottom: 0, background: '#2a1d52' }} />

            {obstacles.map((o, i) => {
              const sx = o.x - camOffset;
              if (sx < -80 || sx > W + 80) return null;
              return <ObstacleBlock key={i} obstacle={o} screenX={sx} />;
            })}

            {/* finish flag */}
            {(() => {
              const sx = finishX - camOffset;
              if (sx > W + 60 || sx < -60) return null;
              return <div style={{ position: 'absolute', left: sx, top: GROUND_Y - 10, fontSize: 40 }}>🏁</div>;
            })()}

            {/* runner */}
            <div style={{ position: 'absolute', left: ALEX_SCREEN_X, top: GROUND_Y - alexY, width: ALEX_W, height: ALEX_H }}>
              <RunnerSprite frame={frame} grounded={grounded} />
            </div>

            {banner && running && <StoryBanner banner={banner} />}

            {phase === 'ready' && (
              <Overlay>
                <div style={{ fontFamily: FONT_PIXEL, fontSize: 10, color: C.cyan }}>ALEX&apos;S CAREER RUN</div>
                <div style={{ fontFamily: FONT_PIXEL, fontSize: 16, color: C.ink, margin: '14px 0', textShadow: `3px 3px 0 ${C.magenta}` }}>
                  {CV.alias}
                </div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 14.5, color: C.inkDim, textAlign: 'center', maxWidth: 420, lineHeight: 1.6, marginBottom: 20 }}>
                  Read the headline floating over each milestone, then jump it. It&apos;s slow on purpose.{' '}
                  {isTouch() ? 'Tap' : 'Space / tap'} to jump.
                </div>
                <PixelButton color={C.green} onClick={jump}>▶ START RUN</PixelButton>
              </Overlay>
            )}

            {phase === 'dead' && (
              <Overlay>
                <div style={{ fontFamily: FONT_PIXEL, fontSize: 14, color: C.magenta, textShadow: `2px 2px 0 ${C.nightDeep}` }}>
                  OOPS — TRIPPED
                </div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 14, color: C.inkDim, margin: '14px 0 20px', textAlign: 'center', maxWidth: 380 }}>
                  No harm done. Even Alex hits the occasional bug. Try again — the run is short.
                </div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
                  <PixelButton color={C.green} onClick={reset}>↺ RETRY</PixelButton>
                  <PixelButton color={C.amber} onClick={skipToWin}>⏭ SKIP TO CONTACT</PixelButton>
                </div>
              </Overlay>
            )}

            {phase === 'win' && (
              <Overlay>
                <div style={{ fontFamily: FONT_PIXEL, fontSize: 12, color: C.amber, textShadow: `2px 2px 0 ${C.nightDeep}` }}>
                  NEXT QUEST
                </div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 15, color: C.ink, margin: '14px 0 6px', textAlign: 'center' }}>
                  Alex is looking for his next quest.
                </div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 13.5, color: C.inkDim, marginBottom: 20, textAlign: 'center', maxWidth: 380 }}>
                  {CV.title} · {CV.location}
                </div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
                  <PixelButton color={C.magenta} onClick={() => { window.location.href = `mailto:${CV.email}`; }}>✉ CONTACT</PixelButton>
                  <PixelButton color={C.cyan} onClick={onDirect}>📄 SEE CV</PixelButton>
                  <PixelButton color={C.amber} onClick={() => window.open(CV.linkedin, '_blank')}>LINKEDIN</PixelButton>
                </div>
              </Overlay>
            )}

            <CRT />
          </div>
        </div>

        <GameHintBar running={running} onJump={jump} />
      </div>
    </div>
  );
}

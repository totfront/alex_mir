import { useState, useRef, useEffect, useCallback } from 'react';
import { MILESTONES, type Milestone } from '../data/milestones';
import {
  SCROLL, GRAVITY, JUMP_V, GAP, FIRST_GAP,
  ALEX_W, ALEX_SCREEN_X, JUMP_CLEAR_HEIGHT, OBSTACLE_W,
} from '../lib/game-config';

export type GamePhase = 'ready' | 'run' | 'dead' | 'win';

export interface ObstacleState extends Milestone {
  x: number;
  hit: boolean;
  scored: boolean;
}

export interface BannerState {
  story: string;
  color: string;
  title: string;
}

const FINISH_X = FIRST_GAP + MILESTONES.length * GAP + 200;

function buildObstacles(): ObstacleState[] {
  return MILESTONES.map((m, i) => ({ ...m, x: FIRST_GAP + i * GAP, hit: false, scored: false }));
}

export function useGameLoop() {
  const [phase, setPhase] = useState<GamePhase>('ready');
  const [cleared, setCleared] = useState(0);
  const [banner, setBanner] = useState<BannerState | null>(null);
  const [, rerender] = useState(0);

  const alexY = useRef(0);
  const vy = useRef(0);
  const onGround = useRef(true);
  const worldX = useRef(0);
  const frameRef = useRef(0);
  const rafRef = useRef<number>(0);
  const passed = useRef(0);
  const dead = useRef(false);
  const obstacles = useRef<ObstacleState[]>(buildObstacles());

  const reset = useCallback(() => {
    alexY.current = 0;
    vy.current = 0;
    onGround.current = true;
    worldX.current = 0;
    frameRef.current = 0;
    passed.current = 0;
    dead.current = false;
    obstacles.current = buildObstacles();
    setCleared(0);
    setBanner(null);
    setPhase('run');
  }, []);

  const jump = useCallback(() => {
    if (phase === 'ready') { reset(); return; }
    if (phase === 'dead') { reset(); return; }
    if (phase === 'win') return;
    if (onGround.current) {
      vy.current = JUMP_V;
      onGround.current = false;
    }
  }, [phase, reset]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w') {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [jump]);

  useEffect(() => {
    if (phase !== 'run') return;

    const tick = () => {
      vy.current += GRAVITY;
      alexY.current -= vy.current;
      if (alexY.current <= 0) {
        alexY.current = 0;
        vy.current = 0;
        onGround.current = true;
      }
      worldX.current += SCROLL;
      frameRef.current += 1;

      const alexLeft = ALEX_SCREEN_X;
      const alexRight = ALEX_SCREEN_X + ALEX_W;

      for (const o of obstacles.current) {
        const sx = o.x - worldX.current;
        if (!o.hit && sx < alexRight && sx + OBSTACLE_W > alexLeft) {
          if (alexY.current < JUMP_CLEAR_HEIGHT) {
            o.hit = true;
            dead.current = true;
          }
        }
        if (!o.scored && sx + OBSTACLE_W < alexLeft) {
          o.scored = true;
          passed.current += 1;
          setCleared(passed.current);
          setBanner({ story: o.story, color: o.color, title: o.title });
        }
      }

      if (dead.current) { setPhase('dead'); return; }
      if (worldX.current > FINISH_X) { setPhase('win'); return; }

      rerender((n) => n + 1);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase]);

  return {
    phase,
    cleared,
    banner,
    camOffset: worldX.current,
    obstacles: obstacles.current,
    frame: frameRef.current,
    grounded: onGround.current,
    alexY: alexY.current,
    finishX: FINISH_X,
    jump,
    reset,
    skipToWin: () => setPhase('win'),
  };
}

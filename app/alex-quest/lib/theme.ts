import type { CSSProperties } from 'react';

export const C = {
  night: '#1a1033',
  nightDeep: '#0d0820',
  panel: '#241845',
  ink: '#f4ecff',
  inkDim: '#a99fd0',
  magenta: '#ff4d9d',
  amber: '#ffc24b',
  cyan: '#46e0d8',
  green: '#7CFF6B',
  line: '#3d2d6b',
} as const;

export const FONT_PIXEL = "'Press Start 2P', 'Courier New', monospace";
export const FONT_BODY = "'DM Sans', 'Segoe UI', system-ui, sans-serif";

export const screenBase: CSSProperties = {
  position: 'relative',
  minHeight: 560,
  width: '100%',
  background: C.nightDeep,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  overflow: 'hidden',
  padding: 12,
  boxSizing: 'border-box',
};

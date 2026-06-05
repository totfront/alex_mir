'use client';

import { useState } from 'react';
import { C } from './lib/theme';
import { CRT } from './components/CRT';
import { Entry } from './components/Entry';
import { Direct } from './components/Direct';
import { Game } from './components/game/Game';

type Mode = 'entry' | 'direct' | 'game';

export function AlexQuest() {
  const [mode, setMode] = useState<Mode>('entry');

  return (
    <div style={{ background: C.nightDeep, minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-thumb { background: ${C.line}; }
        a:hover { color: ${C.amber} !important; }
      `}</style>

      <div style={{ maxWidth: 1280, margin: '0 auto', minHeight: '100vh', position: 'relative' }}>
        {mode === 'entry' && <Entry onChoose={setMode} />}
        {mode === 'direct' && <Direct onBack={() => setMode('entry')} />}
        {mode === 'game' && <Game onExit={() => setMode('entry')} onDirect={() => setMode('direct')} />}

        <CRT />
      </div>
    </div>
  );
}

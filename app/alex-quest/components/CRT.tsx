export function CRT() {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background:
          'repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 2px, transparent 4px)',
        mixBlendMode: 'multiply',
        zIndex: 50,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          boxShadow: 'inset 0 0 160px 40px rgba(0,0,0,0.7)',
        }}
      />
    </div>
  );
}

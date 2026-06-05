import { useState, useEffect, useRef } from 'react';

export function useScaleToFit(naturalWidth: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // clientWidth = content box (excludes border), which is what we scale into
    const update = () => setScale(Math.min(1, el.clientWidth / naturalWidth));

    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [naturalWidth]);

  return { ref, scale };
}

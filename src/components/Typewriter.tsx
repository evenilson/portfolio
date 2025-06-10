import { useEffect, useRef, useState } from "react";

interface TypeWriterProps {
  texts: string[]
  delay?: number
  withCaret?: boolean
  loop?: boolean
  deleteSpeed?: number
  onCycleComplete?: () => void
}

export function TypeWriter({
  texts,
  delay = 100,
  deleteSpeed = 50,
  withCaret = false,
  loop = false,
  onCycleComplete = () => { }
}: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");

  const frameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const indexRef = useRef<number>(0);
  const textIndexRef = useRef<number>(0);
  const isDeletingRef = useRef<boolean>(false);
  const pauseRef = useRef<number | null>(null);

  useEffect(() => {
    let isCancelled = false;
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    const step = (time: number) => {
      if (isCancelled) return;
      const currentText = texts[textIndexRef.current] || "";

      if (pauseRef.current && time < pauseRef.current) {
        frameRef.current = requestAnimationFrame(step);
        return;
      };

      const delta = time - lastTimeRef.current;
      const speed = isDeletingRef.current ? deleteSpeed : delay;
      if (delta >= speed) {
        if (!isDeletingRef.current) {
          indexRef.current += 1;
          setDisplayed(currentText.slice(0, indexRef.current));

          if (indexRef.current >= currentText.length) {
            isDeletingRef.current = true;
            pauseRef.current = time + 1000;
          }
        } else {
          indexRef.current -= 1;
          setDisplayed(currentText.slice(0, indexRef.current));

          if (indexRef.current <= 0) {
            isDeletingRef.current = false;
            const nextIndex = textIndexRef.current + 1;

            if (nextIndex >= texts.length) {
              if (loop) {
                textIndexRef.current = 0;
              } else {
                onCycleComplete?.();
                return;
              }
            } else {
              textIndexRef.current = nextIndex;
            }
            indexRef.current = 0;
            pauseRef.current = time + 500;
          }
        }
        lastTimeRef.current = time;
      }
      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      isCancelled = true;
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };

  }, [delay, deleteSpeed, loop, texts, onCycleComplete]);

  return <>
    {displayed}
    {
      withCaret && <div className="max-h-full h-14 w-1 ml-4 bg-blue-800 dark:bg-blue-400 inline-block animate-pulseFull"></div>
    }
  </>
}
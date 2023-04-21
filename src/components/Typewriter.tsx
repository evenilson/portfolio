import { useEffect, useState } from "react";

interface TypeWriterProps {
  text: string
  delay: number
  withMarket?: boolean
}

export function TypeWriter({ text, delay, withMarket = false }: TypeWriterProps) {
  const [message] = useState(text);
  const [displayed, updateDisplay] = useState("");
  let animID:ReturnType<typeof setInterval>;
  useEffect(() => {
    updateDisplay(message.charAt(0)); // call once to avoid empty element flash
    animID = setInterval(typeLetter, delay);
    return () => {
      updateDisplay("");
      clearInterval(animID);
    }
  }, [message]); // this make sure it re-renders every time the content changes (return function resets display) 

  const typeLetter = () => {
    updateDisplay(prevText => {
      if (message.length <= prevText.length) clearInterval(animID);
      return prevText.concat(message.charAt(prevText.length))
    });
  }

  return <>
    {displayed}
    {
      withMarket && <div className="max-h-full h-14 w-1 ml-4 bg-blue-800 dark:bg-blue-400 inline-block animate-pulseFull"></div>
    }
  </>
}
import { useEffect, useState } from "react";

interface UseTypewriterProps {
  phrases: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
}

export function useTypewriter({
  phrases,
  speed = 100,
  deleteSpeed = 50,
  delay = 2000,
}: UseTypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
      }
      
      if (!isDeleting && displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, phrases, speed, deleteSpeed, delay]);

  return displayText;
}

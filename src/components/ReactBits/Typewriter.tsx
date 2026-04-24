import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  cursorColor?: string;
  delay?: number;
}

export function Typewriter({ 
  text, 
  speed = 100, 
  className = '', 
  cursorColor = 'currentColor',
  delay = 0
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const initialDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, index));
        index++;
        if (index > text.length) {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(initialDelay);
  }, [text, speed, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayedText}</span>
      <motion.span 
        className="ml-[0.05em] inline-block w-[0.05em] h-[0.9em]"
        style={{ backgroundColor: cursorColor, opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      />
    </span>
  );
}

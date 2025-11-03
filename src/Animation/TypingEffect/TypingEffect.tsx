import React, { useEffect, useRef, useState } from 'react';
import { TypingEffectProps } from './TypingEffect.types';
import { useTheme } from '../../Theme/ThemeProvider';
import { Text } from '../../Atoms';

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  typeSpeed = 80,
  showCursor = true,
  cursorBlinkSpeed = 550,
  className = null,
  sx = null,
  textColor = null,
  variant = 'default',
  component = 'span',
  align,
  fontFamily
}) => {
  const { colors } = useTheme();

  const fullText = text || '';
  const [displayed, setDisplayed] = useState('');
  const [isPaused, setIsPaused] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  // Reset when text changes
  useEffect(() => {
    setDisplayed('');
    setIsPaused(false);
  }, [text]);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    if (!fullText) {
      return;
    }

    // Finished typing - stop
    if (displayed === fullText) {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      return;
    }

    // Animation tick - continue typing
    const tick = () => {
      setDisplayed(prev => {
        const targetLength = prev.length + 1;
        if (targetLength <= fullText.length) {
          return fullText.slice(0, targetLength);
        }
        return prev;
      });
    };

    timeoutRef.current = window.setTimeout(tick, typeSpeed);
    
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [fullText, displayed, isPaused, typeSpeed]);

  // Cursor blinking control
  const [cursorVisible, setCursorVisible] = useState(true);
  useEffect(() => {
    if (!showCursor) return;
    const id = window.setInterval(() => setCursorVisible(v => !v), cursorBlinkSpeed);
    return () => window.clearInterval(id);
  }, [showCursor, cursorBlinkSpeed]);

  const cursorColor = textColor ?? colors.primary.light;

  return (
    <span
      className={['typing-effect-kariu', className ?? ''].filter(Boolean).join(' ')}
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        whiteSpace: 'pre',
        ...sx ?? {}
      }}
    >
      <Text
        text={displayed}
        variant={variant}
        component={component}
        align={align}
        textColor={textColor}
        fontFamily={fontFamily}
        sx={{ display: 'inline' }}
      />
      {showCursor ? (
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            width: 1,
            marginLeft: 2,
            borderRight: `2px solid ${cursorVisible ? cursorColor : 'transparent'}`,
            height: '1em',
            verticalAlign: 'baseline'
          }}
        />
      ) : null}
    </span>
  );
};

export default TypingEffect;



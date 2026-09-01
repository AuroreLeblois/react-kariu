import React, { useEffect, useMemo, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import type { D20RollerFace, D20RollerProps } from "./D20Roller.types";

const SIDES = 20;
const ANGLE = 53;
const RING_ANGLE = -11;
const SIDE_ANGLE = 360 / 5;

const roll = keyframes`
  10% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
  30% { transform: rotateX(120deg) rotateY(240deg) rotateZ(0deg) translateX(40px) translateY(40px); }
  50% { transform: rotateX(240deg) rotateY(480deg) rotateZ(0deg) translateX(-40px) translateY(-40px); }
  70% { transform: rotateX(360deg) rotateY(720deg) rotateZ(0deg); }
  90% { transform: rotateX(480deg) rotateY(960deg) rotateZ(0deg); }
`;

const selectedFaceScale = keyframes`
  0% { transform: scale(1); }
  45% { transform: scale(var(--d20-selected-scale, 1.25)); }
  100% { transform: scale(1); }
`;

const toFace = (value: number): D20RollerFace => Math.min(Math.max(Math.round(value), 1), SIDES) as D20RollerFace;

const getDieTransform = (face: D20RollerFace) => {
  if (face <= 5) {
    return `rotateX(${-ANGLE}deg) rotateY(${SIDE_ANGLE * (face - 1)}deg)`;
  }

  if (face >= 16) {
    return `rotateX(${180 - ANGLE}deg) rotateY(${-SIDE_ANGLE * (face - 15)}deg)`;
  }

  if (face <= 10) {
    return `rotateX(${-RING_ANGLE}deg) rotateZ(180deg) rotateY(${SIDE_ANGLE * (face - 6)}deg)`;
  }

  return `rotateX(${-RING_ANGLE}deg) rotateY(${-SIDE_ANGLE * (face - 8) - SIDE_ANGLE / 2}deg)`;
};

const getFaceTransform = (face: D20RollerFace, size: number) => {
  const faceWidth = size * 0.5;
  const faceHeight = faceWidth * 0.86;
  const translateZ = faceWidth * 0.335;
  const translateY = -faceHeight * 0.15;
  const translateRingZ = faceWidth * 0.75;
  const translateRingY = faceHeight * 0.78 + translateY;
  const translateLowerZ = translateZ;
  const translateLowerY = faceHeight * 0.78 + translateRingY;

  if (face <= 5) {
    return `rotateY(${-SIDE_ANGLE * (face - 1)}deg) translateZ(${translateZ}px) translateY(${translateY}px) rotateX(${ANGLE}deg)`;
  }

  if (face >= 16) {
    return `rotateY(${SIDE_ANGLE * (face - 18) + SIDE_ANGLE / 2}deg) translateZ(${translateLowerZ}px) translateY(${translateLowerY}px) rotateZ(180deg) rotateX(${ANGLE}deg)`;
  }

  if (face <= 10) {
    return `rotateY(${-SIDE_ANGLE * (face - 11)}deg) translateZ(${translateRingZ}px) translateY(${translateRingY}px) rotateZ(180deg) rotateX(${RING_ANGLE}deg)`;
  }

  return `rotateY(${SIDE_ANGLE * (face - 8) + SIDE_ANGLE / 2}deg) translateZ(${translateRingZ}px) translateY(${translateRingY}px) rotateX(${RING_ANGLE}deg)`;
};

const randomFace = (lastFace: D20RollerFace): D20RollerFace => {
  const face = toFace(Math.floor(Math.random() * SIDES) + 1);
  return face === lastFace ? randomFace(lastFace) : face;
};

const Scene = styled.div<{ $size: number }>`
  position: relative;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  perspective: ${({ $size }) => $size * 7.5}px;
`;

const Die = styled.div<{
  $activeFace: D20RollerFace;
  $animationDuration: number;
  $disabled: boolean;
  $isRolling: boolean;
  $transitionDuration: number;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
  transform: ${({ $activeFace }) => getDieTransform($activeFace)};
  transform-style: preserve-3d;
  transition: transform ${({ $transitionDuration }) => $transitionDuration}ms ease-out;

  ${({ $animationDuration, $isRolling }) =>
    $isRolling &&
    css`
      animation: ${roll} ${$animationDuration}ms linear;
    `}
`;

const Face = styled.figure<{
  $face: D20RollerFace;
  $faceColor: string;
  $isHighlighted: boolean;
  $selectedScale: number;
  $selectedScaleDuration: number;
  $shadowColor: string;
  $size: number;
  $textColor: string;
}>`
  position: absolute;
  left: 50%;
  top: 0;
  margin: 0 ${({ $size }) => -$size * 0.25}px;
  border-left: ${({ $size }) => $size * 0.25}px solid transparent;
  border-right: ${({ $size }) => $size * 0.25}px solid transparent;
  border-bottom: ${({ $size }) => $size * 0.43}px solid ${({ $faceColor }) => $faceColor};
  width: 0;
  height: 0;
  backface-visibility: hidden;
  filter: drop-shadow(0 3px 5px ${({ $shadowColor }) => $shadowColor});
  transform: ${({ $face, $size }) => getFaceTransform($face, $size)};
  transform-style: preserve-3d;

  > span {
    position: absolute;
    top: ${({ $size }) => $size * 0.1075}px;
    left: ${({ $size }) => -$size * 0.5}px;
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size * 0.43}px;
    color: ${({ $textColor }) => $textColor};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ $size }) => $size * 0.215}px;
    font-weight: 700;
    line-height: 1;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.75);
    transform-origin: center;
    user-select: none;

    ${({ $isHighlighted, $selectedScale, $selectedScaleDuration }) =>
      $isHighlighted &&
      css`
        --d20-selected-scale: ${$selectedScale};
        animation: ${selectedFaceScale} ${$selectedScaleDuration}ms ease-out;
      `}
  }
`;

const faces = Array.from({ length: SIDES }, (_, index) => toFace(index + 1));

const D20Roller: React.FC<D20RollerProps> = ({
  value,
  defaultValue = 1,
  labels,
  size = 200,
  faceColor = "rgba(30, 180, 20, 0.75)",
  textColor = "#ffffff",
  shadowColor = "rgba(0, 0, 0, 0.35)",
  transitionDuration = 500,
  animationDuration = 3000,
  selectedScale = 1.25,
  selectedScaleDuration = 450,
  randomizeOnClick = true,
  disabled = false,
  className = "",
  sx = {},
  "aria-label": ariaLabel = "Roll a d20",
  onRoll,
  onResult,
  onChange,
}) => {
  const isControlled = value !== undefined;
  const [currentFace, setCurrentFace] = useState<D20RollerFace>(toFace(defaultValue));
  const [highlightedFace, setHighlightedFace] = useState<D20RollerFace | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const highlightTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeFace = toFace(isControlled ? value : currentFace);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (highlightTimeoutRef.current) {
        clearTimeout(highlightTimeoutRef.current);
      }
    };
  }, []);

  const faceLabels = useMemo(
    () =>
      faces.reduce<Record<D20RollerFace, React.ReactNode>>((acc, face) => {
        acc[face] = labels?.[face] ?? face;
        return acc;
      }, {} as Record<D20RollerFace, React.ReactNode>),
    [labels],
  );

  const setFace = (face: D20RollerFace) => {
    if (!isControlled) {
      setCurrentFace(face);
    }
    onChange?.(face);
  };

  const handleRoll = () => {
    if (disabled || !randomizeOnClick) return;

    const nextFace = randomFace(activeFace);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (highlightTimeoutRef.current) {
      clearTimeout(highlightTimeoutRef.current);
    }

    setIsRolling(true);
    setHighlightedFace(null);
    onRoll?.(nextFace);

    timeoutRef.current = setTimeout(() => {
      setIsRolling(false);
      setFace(nextFace);
      onResult?.(nextFace);
      setHighlightedFace(nextFace);

      highlightTimeoutRef.current = setTimeout(() => {
        setHighlightedFace(null);
      }, selectedScaleDuration);
    }, animationDuration);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleRoll();
    }
  };

  return (
    <Scene
      $size={size}
      className={className}
      style={sx}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      onClick={handleRoll}
      onKeyDown={handleKeyDown}
    >
      <Die
        $activeFace={activeFace}
        $animationDuration={animationDuration}
        $disabled={disabled}
        $isRolling={isRolling}
        $transitionDuration={transitionDuration}
      >
        {faces.map((face) => (
          <Face
            key={face}
            $face={face}
            $faceColor={faceColor}
            $isHighlighted={highlightedFace === face}
            $selectedScale={selectedScale}
            $selectedScaleDuration={selectedScaleDuration}
            $shadowColor={shadowColor}
            $size={size}
            $textColor={textColor}
          >
            <span>{faceLabels[face]}</span>
          </Face>
        ))}
      </Die>
    </Scene>
  );
};

export default D20Roller;

import type React from "react";

export type D20RollerFace = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;

export interface D20RollerProps {
  /** Controlled active face. */
  value?: D20RollerFace;
  /** Initial face used when the component is uncontrolled. */
  defaultValue?: D20RollerFace;
  /** Optional custom label for each face. */
  labels?: Partial<Record<D20RollerFace, React.ReactNode>>;
  /** Die size in pixels. */
  size?: number;
  /** Fill color used for every triangular face. */
  faceColor?: string;
  /** Label color used on every face. */
  textColor?: string;
  /** Drop shadow color applied to the faces. */
  shadowColor?: string;
  /** Duration of the face transition in milliseconds. */
  transitionDuration?: number;
  /** Duration of the roll animation in milliseconds. */
  animationDuration?: number;
  /** Scale applied to the selected face label at the end of a roll. */
  selectedScale?: number;
  /** Duration of the selected face scale effect in milliseconds. */
  selectedScaleDuration?: number;
  /** Rolls a random face when the die is clicked or activated with the keyboard. */
  randomizeOnClick?: boolean;
  /** Disables click and keyboard interaction. */
  disabled?: boolean;
  /** Additional class name applied to the wrapper. */
  className?: string;
  /** Inline styles applied to the wrapper. */
  sx?: React.CSSProperties;
  /** Accessible label for the interactive die. */
  "aria-label"?: string;
  /** Called when a roll starts with the target face. */
  onRoll?: (face: D20RollerFace) => void;
  /** Called when a roll finishes and the final result is visible. */
  onResult?: (face: D20RollerFace) => void;
  /** Called when the visible face changes. */
  onChange?: (face: D20RollerFace) => void;
}

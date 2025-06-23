import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../Theme/ThemeProvider';
import {getContrastTextColor} from '../Theme/colorContrast';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label to display above the textarea */
  label?: string;
  /** Color of the background */
  backgroundColor?: string;
  /** Size of the textarea */
  size?: 'small' | 'medium' | 'large';
  /** Shape of the textarea */
  shape?: 'square' | 'round';
  /** Customized CSS */
  className?: string;
  /** Custom CSS styles */
  sx?: React.CSSProperties;
}

const sizeMap = {
  small: {
    fontSize: '0.85rem',
    padding: '0.5rem 1rem',
    minHeight: '60px',
    labelFont: '0.85rem',
  },
  medium: {
    fontSize: '1rem',
    padding: '0.7rem 1.25rem',
    minHeight: '90px',
    labelFont: '1rem',
  },
  large: {
    fontSize: '1.25rem',
    padding: '0.85rem 1.5rem',
    minHeight: '140px',
    labelFont: '1.1rem',
  },
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledLabel = styled.label<{
  $active: boolean;
  $colors: any;
  $size: 'small' | 'medium' | 'large';
}>`
  position: absolute;
  left: 16px;
  top: ${({ $active }) => ($active ? '4px' : '50%')};
  transform: translateY(${({ $active }) => ($active ? '0' : '-50%')});
  font-size: ${({ $active, $size }) => ($active ? '0.8em' : sizeMap[$size].labelFont)};
  color: ${({ $colors, $active }) => $active ? $colors.primary.main : $colors.text.light};
  background: transparent;
  padding: 0 4px;
  pointer-events: none;
  transition: all 0.18s cubic-bezier(.4,0,.2,1);
  z-index: 2;
`;

const StyledTextArea = styled.textarea<{
  $colors: any;
  $backgroundColor?: string;
  $shape: 'square' | 'round';
  $size: 'small' | 'medium' | 'large';
  $hasLabel: boolean;
}>`
  color: ${({  $backgroundColor, $colors }) => getContrastTextColor($backgroundColor ?? $colors.background.light)};
  background: ${({ $backgroundColor, $colors }) => $backgroundColor || $colors.background.light};
  font-family: ${({ $colors }) => $colors.fontFamily};
  border: 1px solid ${({ $colors }) => $colors.border};
  border-radius: ${({ $shape }) => ($shape === 'square' ? '10px' : '2em')};
  font-size: ${({ $size }) => sizeMap[$size].fontSize};
  padding: ${({ $size, $hasLabel }) => $hasLabel ? `1.6em 1em 0.7em 1em` : sizeMap[$size].padding};
  min-height: ${({ $size }) => sizeMap[$size].minHeight};
  width: 100%;
  resize: vertical;
  transition: border 0.2s, box-shadow 0.2s;
  outline: none;
  &:focus {
    border-color: ${({ $colors }) => $colors.primary.main};
    box-shadow: 0 0 0 2px ${({ $colors }) => $colors.primary.lighter};
  }
  &::placeholder {
    color: ${({ $colors }) => $colors.text.lighter};;
  }
`;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      backgroundColor,
      size = 'medium',
      shape = 'square',
      className = '',
      sx = {},
      disabled,
      value,
      defaultValue,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const { colors } = useTheme();
    
    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(value ?? defaultValue ?? '');

    // Keep internal value in sync with controlled value
    React.useEffect(() => {
      if (value !== undefined) setInternalValue(value);
    }, [value]);

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setFocused(true);
      onFocus && onFocus(e);
    };
    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setFocused(false);
      onBlur && onBlur(e);
    };
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInternalValue(e.target.value);
      props.onChange && props.onChange(e);
    };

    const isActive = focused || (String(internalValue) && String(internalValue).length > 0);

    return (
      <Wrapper className={`kariu-textarea-wrapper ${className}`} style={{ width: '100%' }}>

        {label && focused && (
          <StyledLabel
            $active={isActive}
            $colors={colors}
            $size={size}
          >
            {label}
          </StyledLabel>
        )}
        <StyledTextArea
          ref={ref}
          $colors={colors}
          $backgroundColor={backgroundColor}
          $shape={shape}
          $size={size}
          $hasLabel={!!label}
          style={sx}
          disabled={disabled}
          value={internalValue}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
       
      </Wrapper>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;

import * as React from 'react';
import { useState, useEffect } from 'react';
import Radio from '../Input/Radio';
import { RadioGroupProps } from '../Input/Input.type';

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  defaultValue = '',
  onChange,
  size = 'medium',
  color,
  direction = 'column',
  sx = {},
  className = '',
  disabled = false,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: direction === 'row' ? 'row' : 'column',
    gap: direction === 'row' ? '1rem' : '0.5rem',
    ...sx
  };

  return (
    <div 
      className={`kariuRadioGroup ${direction} ${className}`}
      style={containerStyle}
    >
      {options.map((option) => (
        <Radio
          key={option.value}
          label={option.label}
          value={option.value}
          name={name}
          checked={selectedValue === option.value}
          onChange={handleChange}
          size={size}
          color={color}
          disabled={disabled || option.disabled}
          {...props}
        />
      ))}
    </div>
  );
};

export default RadioGroup;

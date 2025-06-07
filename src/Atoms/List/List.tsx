import React from 'react';
import { useTheme } from '../../Theme/ThemeProvider';

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children, className = '', ...props }) => {
  const { colors } = useTheme();
  return (
    <ul
      className={`${className} kariu-list`}
      style={{
        listStyle: 'none',
        color: colors.text?.main,
        background: colors.background?.main,
        border: `1px solid ${colors.border}`,
        borderRadius: 8,
        padding: 8,
        margin: 0,
        ...props.style
      }}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child as React.ReactElement, {
          isLast: index === React.Children.count(children) - 1,
        });
      })}
    </ul>
  );
};

export default List; 
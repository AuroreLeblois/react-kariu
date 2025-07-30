import React from "react";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  display?: React.CSSProperties["display"];
  flexDirection?: React.CSSProperties["flexDirection"];
  alignItems?: React.CSSProperties["alignItems"];
  justifyContent?: React.CSSProperties["justifyContent"];
  gap?: React.CSSProperties["gap"];
  padding?: React.CSSProperties["padding"];
  margin?: React.CSSProperties["margin"];
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  maxWidth?: React.CSSProperties["maxWidth"];
  maxHeight?: React.CSSProperties["maxHeight"];
  minWidth?: React.CSSProperties["minWidth"];
  minHeight?: React.CSSProperties["minHeight"];
  flexWrap?: React.CSSProperties["flexWrap"];
  className?: string;
  fullWidth?: boolean;
  // Ajoutez d'autres props de layout si besoin
}

const Layout: React.FC<LayoutProps> = ({
  display = 'flex',
  flexDirection,
  flexWrap = 'wrap',
  alignItems = 'center',
  justifyContent = "center",
  gap,
  padding,
  margin,
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  style,
  children,
  className,
  fullWidth,
  ...rest
}) => {
  return (
    <div
      className={`kariu-layout ${className ?? null}`}
      style={{
        display,
        flexFlow: 'wrap',
        flexDirection,
        alignItems,
        justifyContent,
        gap,
        padding,
        margin,
        width,
        height,
        maxWidth,
        maxHeight,
        minWidth,
        minHeight,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Layout; 
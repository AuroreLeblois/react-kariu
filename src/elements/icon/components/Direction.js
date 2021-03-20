import * as React from "react";

function SvgDirection({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      direction={props.direction}
      color={props.color}
      animation={props.animation}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path
          fill="#FFD476"
          d="M23.492 33.603l-20.554-2.17a1 1 0 01-.567-1.735L34.261.72a1 1 0 011.612 1.082L24.536 32.951a1 1 0 01-1.044.652z"
        />
        <path
          fill="#FFC445"
          d="M24.316 33.288a1 1 0 01-.247-1.063L35.092 1.94a1 1 0 011.937.269l3.215 43.952a1 1 0 01-1.69.794L24.316 33.288z"
        />
      </g>
    </svg>
  );
}

export default SvgDirection;

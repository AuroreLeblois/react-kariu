import * as React from "react";

function SvgStackalt({ title, titleId, ...props }) {
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
          fill="#FFAE00"
          d="M23.863 0v48L3.323 36.25l-.001-24.3L23.862 0zm.004 0l20.541 11.95-.001 24.3L23.867 48V0z"
          opacity={0.196}
        />
        <path
          fill="#66BF3C"
          d="M8.99 28.72l7.969-4.637a14 14 0 0114.082 0l7.969 4.637a4 4 0 01.056 6.881l-7.828 4.728a14 14 0 01-14.476 0l-7.828-4.728a4 4 0 01.056-6.881z"
          opacity={0.5}
        />
        <path
          fill="#FFAE00"
          d="M8.99 20.826l7.969-4.637a14 14 0 0114.082 0l7.969 4.637a4 4 0 01.056 6.881l-7.828 4.728a14 14 0 01-14.476 0l-7.828-4.728a4 4 0 01.056-6.881z"
          opacity={0.5}
        />
        <path
          fill="#FC521F"
          d="M8.99 12.932l7.969-4.637a14 14 0 0114.082 0l7.969 4.637a4 4 0 01.056 6.881l-7.828 4.728a14 14 0 01-14.476 0l-7.828-4.728a4 4 0 01.056-6.88z"
          opacity={0.5}
        />
      </g>
    </svg>
  );
}

export default SvgStackalt;

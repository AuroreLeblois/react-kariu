import * as React from "react";

function SvgSvgLoadingDots(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 132 58"
      xmlns="http://www.w3.org/2000/svg"
      direction={props.direction}
      color={props.color}
      animation={props.animation}
      {...props}
    >
      <g fill={props.color} fillRule="evenodd">
        <path cx={25} cy={30} r={13} />
        <path cx={65} cy={30} r={13} />
        <path cx={105} cy={30} r={13} />
      </g>
    </svg>
  );
}

export default SvgSvgLoadingDots;

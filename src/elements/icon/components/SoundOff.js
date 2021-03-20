import * as React from "react";

function SvgSoundOff({...props }) {
  return (
    <svg
      className="soundOff_svg__svg-icon"
      viewBox="0 0 20 20"
      width="1em"
      height="1em"
      direction={props.direction}
      color={props.color}
      animation={props.animation}
      {...props}
    >
      <path d="M18.084 11.639a.433.433 0 01-.612.611l-1.639-1.639-1.639 1.639a.432.432 0 01-.613-.611L15.223 10l-1.64-1.639a.432.432 0 01.612-.61l1.639 1.639 1.639-1.639a.432.432 0 11.611.61L16.445 10l1.639 1.639zm-5.923-8.985v14.691a.432.432 0 01-.738.305l-3.979-3.979H2.222a.433.433 0 01-.432-.432v-6.48c0-.237.195-.432.432-.432h5.222l3.979-3.978a.428.428 0 01.471-.095.434.434 0 01.267.4M7.192 7.192H2.654v5.617h4.538V7.192zm4.104-3.494l-3.24 3.241v6.123l3.24 3.24V3.698z" />
    </svg>
  );
}

export default SvgSoundOff;

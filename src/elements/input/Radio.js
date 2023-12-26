import React, { useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "./../../index.js";
import { css } from "@emotion/css";

const Radio = (props) => {
  const [checked, setChecked] = useState(props.checked ? props.checked : false);

  function handleClick() {
    setChecked(true) && props.onChange;
  }

  if (!props.label) return null;

  let textColor = {
    color: props.textColor ? props.textColor : "blue navy",
    fontFamily: props.fontFamily ? props.fontFamily : "inherit",
  };

  const wrapper = {
    display: "flex",
    lineHeight: "normal",
  };

  let styleRadio = {
    verticalAlign: "text-bottom",
    borderRadius: "4px",
    height: "1rem",
    width: "1rem",
    marginRight: ".25rem",
    backgroundColor: props.backgroundColor ? props.backgroundColor : "white",
    "&:checked": {
      backgroundColor: props.backgroundColorChecked
        ? props.backgroundColorChecked
        : "tomato",
    },
  };

  return (
    <div
      className={"radio-kariu--wrapper " + css(wrapper) + " " + props.className}
    >
      <input
        type="radio"
        required={props.required}
        className={"radio-kariu " + css(styleRadio)}
        id={props.id}
        name={props.name}
        onChange={() => {
          handleClick() && props.onChange;
        }}
        checked={checked}
      />
      <label className={css(textColor)} htmlFor={props.label}>
        {props.label}
      </label>
    </div>
  );
};

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  fontFamily: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundColorChecked: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Radio;

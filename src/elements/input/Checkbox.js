import React, { useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "./../../index.js";
import { css } from "@emotion/css";

const Checkbox = (props) => {
  const [checked, setChecked] = useState(props.checked || false);
  if (!props.value) return null;

  const wrapper = {
    display: "flex",
    lineHeight: "1.5rem",
    cursor: "pointer",
    alignItems: "center",
  };

  let textColor = {
    fontFamily: props.fontFamily ? props.fontFamily : "inherit",
    color: props.textColor ? props.textColor : "#43464B",
    cursor: "pointer",
    lineHeight: "1.5rem",
  };

  let styleCheckbox = {
    WebkitAppearance: "none",
    MozAppearance: "none",
    msAppearance: "none",
    verticalAlign: "text-bottom",
    cursor: "pointer",
    borderRadius: "4px",
    height: "1.25rem",
    width: "1.25rem",
    marginRight: ".25rem",
    background: "#fff",
    border: "1px solid #ccc",
    backgroundColor: props.backgroundColor ? props.backgroundColor : "white",
    "&:checked": {
      backgroundColor: props.backgroundColorChecked
        ? props.backgroundColorChecked
        : "tomato",
    },
  };

  return (
    <div
      id={props.id}
      onClick={() => setChecked(!checked)}
      className={
        "checkbox-kariu--wrapper " + css(wrapper) + " " + props.className
      }
    >
      <label className={css(textColor)} htmlFor={props.value}>
        <input
          type="checkbox"
          required={props.required}
          className={"checkbox-kariu " + css(styleCheckbox)}
          value={props.value}
          name={props.name}
          checked={checked}
          onChange={props.onChange}
        />
        {props.value}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string.required,
  fontFamily: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundColorChecked: PropTypes.string,
  required: PropTypes.bool,
};
Checkbox.defaultProps = {
  fontFamily: "inherit",
};

export default Checkbox;

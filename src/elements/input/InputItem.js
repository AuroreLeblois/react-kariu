import React, { useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "./../../index.js";
import { css } from "@emotion/css";

const InputItem = (props) => {
  const [value, setValue] = useState(props.value);

  if (!value) return null;

  function handleDelete() {
    setValue("");
  }

  let backgroundColor = props.backgroundColor
    ? props.backgroundColor
    : "lightblue";
  let textColor = props.textColor ? props.textColor : "black";

  let inputItemKariu = {
    maxWidth: "fit-content",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",
    bordeRadius: "15%",
    borderRadius: "0.25rem",
    backgroundColor: backgroundColor,
  };

  let inputItemKariuParagraph = {
    color: textColor,
    fontWeight: "normal",
    fontSize: "0.85rem",
    lineHeight: "1rem",
    padding: "0.25rem",
    fontFamily: props.fontFamily ? props.fontFamily : "inherit",
  };

  let inputItemKariuButtonDelete = {
    outline: "none",
    border: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
    borderTopRightRadius: "0.25rem",
    borderBottomRightRadius: "0.25rem",
    backgroundColor: backgroundColor,
    color: textColor,
    cursor: "pointer",
    ":hover": { filter: "brightness(95%)" },
  };

  return (
    <div className={css(inputItemKariu) + " " + props.className}>
      <p className={css(inputItemKariuParagraph)}>{value}</p>
      <button
        className={css(inputItemKariuButtonDelete)}
        onClick={handleDelete}
      >
        <Icon icon="cross" height=".6rem" width=".6rem" color={textColor} />
      </button>
    </div>
  );
};

InputItem.propTypes = {
  fontFamily: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  value: PropTypes.string,
};

InputItem.defaultProps = {
  fontFamily: "inherit",
  backgroundColor: "lightblue",
  textColor: "blue-grey",
  value: "Example",
};

export default InputItem;

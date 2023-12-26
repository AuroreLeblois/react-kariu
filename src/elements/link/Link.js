import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/css";
import { Icon } from "./../../index.js";

const Link = (props) => {
  if (!props.href || !props.text) return null;

  let linkStyle = {
    display: "flex",
    cursor: "pointer",
    whiteSpace: "nowrap",
    fontWeight: "bold",
    textDecoration: "none",
    fontFamily: props.fontFamily ? props.fontFamily : "inherit",
    color: props.textColor ? props.textColor : "#3c89D0",
    svg: { marginLeft: "6px" },
    "&:hover": {
      textDecoration: "underline",
    },
    ":visited": {
      filter: "brightness(40%)",
    },
  };

  return (
    <div onClick={() => handleClick(props)}>
      <a className={css(linkStyle) + " link-kariu"}>
        {props.text}
        {renderIconExternal(props)}
      </a>
    </div>
  );
};

const renderIconExternal = (props) => {
  if (!props.isExternal) return null;

  return (
    <Icon
      icon="external"
      color={props.textColor ? props.textColor : "#3c89D0"}
    />
  );
};

function handleClick(props) {
  if (props.isExternal) window.open(props.href);
  else window.location.href = props.href;
}

Link.propTypes = {
  fontFamily: PropTypes.string,
  textColor: PropTypes.string,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
};

export default Link;

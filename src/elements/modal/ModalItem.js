import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/css";

const ModalItem = (props) => {
  // Renderers ----------------------------------------------------------------

  const styleItem = {
    display: "flex",
    padding: "0.75rem " + "0.5rem",
    lineHeight: "1.5rem",
    justifyContent: props.justify,
    flexWrap: props.wrap,
    flexGrow: props.grow,
    flexDirection: props.direction,
    fontFamily: props.fontFamily ? props.fontFamily : "inherit",
  };

  return (
    <div className={"modalItem-kariu " + css(styleItem)}>
      {[props.children]}
    </div>
  );
};

ModalItem.propTypes = {
  fontFamily: PropTypes.string,
  direction: PropTypes.string,
  grow: PropTypes.number,
  wrap: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
};

ModalItem.defaultProps = {
  direction: "column",
  grow: 0,
  wrap: "nowrap",
  align: "stretch",
  justify: "center",
};

export default ModalItem;

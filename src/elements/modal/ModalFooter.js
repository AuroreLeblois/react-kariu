import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/css";

const ModalFooter = (props) => {
  // Renderers ----------------------------------------------------------------

  const styleFooter = {
    // backgroundColor: tokens.color.gray.light.value,
    padding: ["0.5rem " + "0.5rem"],
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    borderTop: "1px solid  #C7C7C7",
    fontFamily: props.fontFamily ? props.fontFamily : "inherit",
  };

  return (
    <div
      className={
        css(styleFooter) + " " + (props.className ? props.className : "")
      }
    >
      {[props.children]}
    </div>
  );
};

export default ModalFooter;

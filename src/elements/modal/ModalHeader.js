import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/css";
import { Button, Title } from "../../index.js";

const ModalHeader = (props) => {
  // Renderers ----------------------------------------------------------------

  const paddingX = "0.125rem";

  const styleHeader = {
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    borderBottom: "1px solid  #C7C7C7",
    marginLeft: paddingX,
    paddingRight: paddingX,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: props.fontFamily ? props.fontFamily : "inherit",
  };

  return (
    <div
      className={
        "modal-kariu--header " +
        css(styleHeader) +
        " " +
        (props.className ? props.className : "")
      }
    >
      {renderTitle()}
      {[props.children]}
    </div>
  );

  function renderTitle() {
    if (!props.title) return null;

    const styleTitle = {
      fontFamily: props.fontFamily ? props.fontFamily : "inherit",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    };

    return (
      <div className={"modal-kariu--header-title " + css(styleTitle)}>
        <Title
          textColor={props.textColor ? props.textColor : "inherit"}
          text={props.title}
          priority={props.priority}
        />
        {renderCloseBtn()}
      </div>
    );
  }
  function renderCloseBtn() {
    return (
      <div>
        <Button
          size="small"
          shape="round"
          icon="cross"
          onClick={props.onClick}
          backgroundColor={"inherit"}
          textColor={props.textColor ? props.textColor : "inherit"}
        />
      </div>
    );
  }
};

ModalHeader.propTypes = {
  title: PropTypes.string,
};

ModalHeader.defaultProps = {
  title: null,
};

export default ModalHeader;

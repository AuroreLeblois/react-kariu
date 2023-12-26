import React, { useState, createRef } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/css";
import { Button, Icon, ModalItem, ModalHeader } from "../../index.js";

const Modal = (props) => {
  const [show, setShow] = useState(props.show || false);
  const refModal = createRef();

  if (!props.show || !show) return;

  let styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    display: "flex",
    flexDirection: "column",
    padding: "0.85em",
    minWidth: "15rem",
    maxWidth: "90%",
    borderRadius: "1em",
    zIndex: "10000",
    transform: "translate(-50%, -50%)",
    outline: "transparent",
    webkitBoxShadow: "2px 1px 3px 1px #C7C7C7",
    boxShadow: "2px 1px 3px 1px #C7C7C7",
    backgroundColor: props.backgroundColor ? props.backgroundColor : "white",
    fontFamily: props.fontFamily ? props.fontFamily : "Arial",
    color: props.textColor ? props.textColor : "tomato",
  };

  const overlay = {
    position: "fixed",
    zIndex: 100,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.16)",
  };

  return (
    <>
      <div className={css(overlay) + " Overlay"}></div>

      <div
        onClick={(event) => {
          handleOutsideClick(event);
        }}
        ref={refModal}
        className={"modal-kariu " + css(styleModal)}
      >
        {renderHeader()}
        {props.children}
      </div>
    </>
  );

  function renderHeader() {
    if (!props.title.length) return null;

    return (
      <ModalHeader
        fontFamily="inherit"
        onClick={handleCloseModal}
        textColor={props.textColor}
        title={props.title}
        priority={props.priority}
      />
    );
  }

  function handleCloseModal() {
    setShow(false);
  }

  function handleOutsideClick(e) {
    if (!refModal.current.contains(e.target)) handleCloseModal();
  }
};

Modal.propTypes = {
  fontFamily: PropTypes.string,
  show: PropTypes.bool.isRequired,
  portalNodeId: PropTypes.string,
  textColor: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

Modal.defaultProps = {
  fontFamily: "inherit",
  portalNodeId: "root",
  show: false,
  textColor: "tomato",
  title: "",
};

export default Modal;

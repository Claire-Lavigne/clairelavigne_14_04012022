import React, { useEffect, useRef } from "react";
import { IconButton } from "@mui/material";
import Close from "@mui/icons-material/Close";

const Modal = ({ isOpen, onClose, closeOutside }) => {
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    };
  });
  return (
    <div
      id="reactSimpleModal"
      className={`RSmodal ${isOpen ? "show" : "hide"}`}
    >
      <section className="RSmodal-main" ref={closeOutside ? myRef : null}>
        <IconButton
          color="primary"
          aria-label="delete"
          onClick={onClose}
          size="large"
        >
          <Close className="close" fontSize="inherit" />
        </IconButton>
        <h1>Employee Created!</h1>
      </section>
    </div>
  );
};

export default Modal;

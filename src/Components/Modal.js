import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HIDEMODAL } from "../redux/reducers/displayModal";

const Modal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.displayModal.show);
  const handleClose = () => {
    dispatch({
      type: HIDEMODAL,
    });
  };
  const showHideModal = showModal
    ? "modal display-block"
    : "modal display-none";
  return (
    <div id="confirmation" className={showHideModal}>
      <section className="modal-main">
        Employee Created!
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;

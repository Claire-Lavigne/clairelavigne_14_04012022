import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "react-abc-modal";

const ABCModal = ({ isOpen, setOpen }) => {
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <Modal isOpen={isOpen} onClose={closeModal} closeOutside={true}>
      <Typography
        component="h3"
        variant="h2"
        sx={{ my: "3rem" }}
        align="center"
      >
        Employee Created!
      </Typography>
    </Modal>
  );
};

export default ABCModal;

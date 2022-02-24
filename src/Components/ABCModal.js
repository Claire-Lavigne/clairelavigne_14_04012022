import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "react-abc-modal";

const ABCModal = ({ isOpen, setOpen }) => {
  return (
    <Modal isOpen={isOpen} setOpen={setOpen} closeOutside={true} icon={true}>
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

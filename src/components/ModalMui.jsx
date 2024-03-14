import { Modal } from "@mui/material";
import React from "react";

function ModalMui(open, close, children) {
  return (
    <div>
      <Modal open={open} onClose={close}>
        {children ? children : <div>Sin contenido</div>} {/* Proporciona un valor predeterminado o manejo para `children` */}
      </Modal>
    </div>
  );
}

export default ModalMui;

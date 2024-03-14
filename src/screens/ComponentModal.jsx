import React from "react";
import { Modal, Box, Button, Typography, DataGrid } from "@mui/material";

const CustomModal = ({ isOpen, onClose, title, content }) => {
  const styleProducts = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={styleProducts}>
        <Button onClick={onClose}>Cerrar</Button>
        <Typography variant="h4">{title}</Typography>
        {content}
      </Box>
    </Modal>
  );
};

export default CustomModal;

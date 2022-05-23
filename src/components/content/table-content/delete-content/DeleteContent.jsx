import React from "react";
import { Button, Modal } from "react-bootstrap";

function DeleteContent({ show, handleClose, deleteProduct }) {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButt on>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah anda yakin akan menghapus product ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteProduct}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteContent;

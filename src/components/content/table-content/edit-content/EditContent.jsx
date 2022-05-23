import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

function EditContent({
  show,
  handleClose,
  name,
  price,
  setName,
  setPrice,
  editProduct,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert Product Name"
                autoFocus
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insert Product Price"
                required
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={editProduct}>
              Edit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditContent;

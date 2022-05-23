import React, { useState } from "react";
import { Form, Modal, Button, Toast } from "react-bootstrap";

function AddContent({ show, handleClose, setProducts }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const restForm = () => {
    setName("");
    setPrice("");
  };

  const addNewContent = () => {
    if (!name) {
    } else if (!price) {
    } else {
      // prev adalah nilai product yang sekarang
      setProducts((prevProduct) => {
        // check apakah product sudah ada datanya
        if (prevProduct.length > 0) {
          let id = Number(prevProduct[prevProduct.length - 1].id) + 1;
          // cara 1 via copy array
          // let productListCopy = [...prevProduct];
          // productListCopy.push({ id: id, name, price });
          // cara 2 spread operator
          restForm();
          handleClose();
          return [...prevProduct, { id: id, name, price }];
        } else {
          let id = 1;
          restForm();
          handleClose();

          return [...prevProduct, { id: id, name, price }];
        }
      });
    }
  };

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
            <Button variant="primary" type="submit" onClick={addNewContent}>
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddContent;

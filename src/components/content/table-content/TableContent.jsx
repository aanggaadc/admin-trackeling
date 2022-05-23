import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Card, Button, Tooltip, OverlayTrigger } from "react-bootstrap";

import { FaEdit, FaTrash } from "react-icons/fa";
import EditContent from "./edit-content/EditContent";
import DeleteContent from "./delete-content/DeleteContent";

function TableContent({ products, handleShow, setProducts }) {
  const [currentId, setCurrentId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };
  const handleShowEditModal = (id, name, price) => {
    setCurrentId(id);
    setName(name);
    setPrice(price);
    setShowEditModal(true);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const handleShowDeleteModal = (id) => {
    setCurrentId(id);
    setShowDeleteModal(true);
  };

  const editProduct = () => {
    const productList = [...products];
    const index = productList.findIndex((item) => item.id === currentId);
    productList[index].name = name;
    productList[index].price = price;
    setProducts(productList);
    setShowEditModal(false);
  };

  const deleteProduct = () => {
    const productDelete = products.filter((item) => item.id !== currentId);
    setProducts(productDelete);
    setShowDeleteModal(false);
  };
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
    },
    {
      dataField: "name",
      text: "Product Name",
    },
    {
      dataField: "price",
      text: "Product Price",
      formatter: (cell, row) => {
        return cell;
      },
    },
    {
      dataField: "",
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <div>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Edit Product</Tooltip>}
            >
              <Button
                variant="none"
                onClick={() => {
                  handleShowEditModal(row.id, row.name, row.price);
                }}
              >
                <FaEdit color="orange" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Delete Product</Tooltip>}
            >
              <Button
                variant="none"
                onClick={() => {
                  handleShowDeleteModal(row.id);
                }}
              >
                <FaTrash color="red" />
              </Button>
            </OverlayTrigger>
          </div>
        );
      },
    },
  ];

  return (
    <div className="mt-3">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          Product List
          <Button variant="primary" onClick={handleShow}>
            Add Product
          </Button>
        </Card.Header>
        <Card.Body>
          <BootstrapTable
            keyField="id"
            data={products}
            columns={columns}
            pagination={paginationFactory()}
          />
        </Card.Body>
      </Card>
      <EditContent
        show={showEditModal}
        handleClose={handleCloseEditModal}
        name={name}
        price={price}
        setName={setName}
        setPrice={setPrice}
        editProduct={editProduct}
      />

      <DeleteContent
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        deleteProduct={deleteProduct}
      />
    </div>
  );
}

export default TableContent;

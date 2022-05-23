import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import AddContent from "./add-content/AddContent";
import FilterContent from "./filter-content/FilterContent";
import TableContent from "./table-content/TableContent";

function Content() {
  const [products, setProducts] = useState(
    new Array(3).fill(null).map((data, index) => {
      const key = index + 1;
      return {
        id: key,
        name: `Product ${key}`,
        price: key * 10000,
      };
    })
  );

  // untuk modal add product
  const [showAddModal, setShowAddModal] = useState(false);
  const handleCloseAddModal = () => setShowAddModal(false);
  const handleShowAddModal = () => setShowAddModal(true);

  const [filter, setFilter] = useState({
    name: "",
    price: "",
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

  const filteredSearch = () => {
    if (filter.name && filter.price) {
      setFilteredProducts(
        products.filter(
          (item) => item.name == filter.name && item.price == filter.price
        )
      );
    } else if (filter.name) {
      setFilteredProducts(products.filter((item) => item.name == filter.name));
    } else if (filter.price) {
      setFilteredProducts(
        products.filter((item) => item.price == filter.price)
      );
    } else {
      setFilteredProducts(products);
    }
  };

  useEffect(() => {
    filteredSearch();
  }, [filter, products]);

  return (
    <div>
      <Container fluid="md">
        <FilterContent setFilter={setFilter} filter={filter} />
        <TableContent
          products={filteredProducts}
          handleShow={handleShowAddModal}
          setProducts={setProducts}
        />
      </Container>
      <AddContent
        show={showAddModal}
        handleClose={handleCloseAddModal}
        setProducts={setProducts}
      />
    </div>
  );
}

export default Content;

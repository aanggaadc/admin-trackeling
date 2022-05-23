import React from "react";
import { Card, Button, Form } from "react-bootstrap";

function FilterContent({ setFilter, filter }) {
  return (
    <div className="mt-3">
      <Card>
        <Card.Header>Filter Product List</Card.Header>
        <Card.Body>
          <Form>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search By Product Name"
                    onChange={(e) => {
                      setFilter({ ...filter, name: e.target.value });
                    }}
                  />
                  <Form.Text className="text-muted">
                    Search By Product Name
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="Number"
                    placeholder="Search By Product Price"
                    onChange={(e) => {
                      setFilter({ ...filter, price: e.target.value });
                    }}
                  />
                  <Form.Text className="text-muted">
                    Search By Product Price
                  </Form.Text>
                </Form.Group>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FilterContent;

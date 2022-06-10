import React from "react";
import { Card, Button, Form } from "react-bootstrap";

function FilterContent({ setFilter, filter }) {
  return (
    <div className="mt-3">
      <Card>
        <Card.Header className="">Search Users</Card.Header>
        <Card.Body>
          <Form>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search By Username"
                    onChange={(e) => {
                      setFilter({ ...filter, name: e.target.value });
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicTripName">
                  <Form.Label>Trip Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search By Trip Name"
                    onChange={(e) => {
                      setFilter({ ...filter, price: e.target.value });
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search By Gender"
                    onChange={(e) => {
                      setFilter({ ...filter, price: e.target.value });
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="Number"
                    placeholder="Search By User Location"
                    onChange={(e) => {
                      setFilter({ ...filter, price: e.target.value });
                    }}
                  />
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

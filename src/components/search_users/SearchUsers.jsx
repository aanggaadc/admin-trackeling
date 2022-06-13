import React from "react";
import { Card, Form } from "react-bootstrap";

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
                      setFilter({ ...filter, username: e.target.value });
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicTripName">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search By Email"
                    onChange={(e) => {
                      setFilter({ ...filter, email: e.target.value });
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select aria-label="Default select example"
                    onChange={(e) => {
                      setFilter({ ...filter, sex: e.target.value })
                    }}>
                    <option value="">Search By Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search By User Location"
                    onChange={(e) => {
                      setFilter({ ...filter, location: e.target.value });
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

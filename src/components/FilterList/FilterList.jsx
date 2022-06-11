import React from 'react'
import {Card , Container, Form} from 'react-bootstrap'

function FilterList() {
  return (
    <div className="FilterList">
      <div className="FilterListContainer">
      <Container>
          <Card>
            <Card.Header>Search</Card.Header>
            <Card.Body >
            <Form>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Trip Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search By Trip by Trip Name"
                    onChange={(e) => {
                      // setFilter({ ...filter, name: e.target.value });
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Destination</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search Trip by Destination"
                    onChange={(e) => {
                      // setFilter({ ...filter, price: e.target.value });
                    }}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search By Trip by Start Date"
                    onChange={(e) => {
                      // setFilter({ ...filter, name: e.target.value });
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search Trip by End Date"
                    onChange={(e) => {
                      // setFilter({ ...filter, price: e.target.value });
                    }}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Count Member</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Search By Trip by Count Member"
                    onChange={(e) => {
                      // setFilter({ ...filter, name: e.target.value });
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Max Member</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Search Trip by Max Member"
                    onChange={(e) => {
                      // setFilter({ ...filter, price: e.target.value });
                    }}
                  />
                </Form.Group>
              </div>
            </div>
          </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  )
}

export default FilterList
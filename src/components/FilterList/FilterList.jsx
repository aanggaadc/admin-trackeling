import React from 'react'
import {Card , Container, Form} from 'react-bootstrap'

function FilterList() {
  return (
    <div className="FilterList">
      <div className="FilterListContainer">
      <Container>
          <Card>
            <Card.Header>Filter</Card.Header>
            <Card.Body >
            <Form>
            <div className="row">
              <div className="">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Search Here...</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ID, Name, Destination, Start Date, End Data, and More"
                    onChange={(e) => {
                      // setFilter({ ...filter, name: e.target.value });
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
import React, { useState, useEffect } from 'react'
import './TripList.scss'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import { Modal, Button } from 'react-bootstrap';

function TripList() {
    const [products, setProducts] = useState(
        new Array(100).fill(null).map((data, index) => {
          const key = index + 1;
          const member = 4
          return {
            tripID: key,
            tripName: `Trip ${key}`,
            destination: `Destination ${key}`,
            startDate: key * 10,
            endDate: key * 10,
            member : member,
            description : `A Trip with ${member} member to destination ${key}`,
            tripStatus: 'done'
          };
        })
      );
    // const products = [ {
    //     'tripID' : 1,
    //     'tripName' : 'jalan santuy',
    //     'destination' : 'bali',
    //     'startDate' : '22-02-2022',
    //     'endDate' : '26-02-2022',
    //     'member' : 4,
    //     'description' : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, tenetur?",
    //     'tripStatus' : 'done'
    // } ];

    const columns = [{
      dataField: 'tripID',
      text: 'Trip ID'
    }, {
      dataField: 'tripName',
      text: 'Trip Name'
    }, {
      dataField: 'destination',
      text: 'Destination'
    }, {
        dataField: 'startDate',
        text : 'Start Date'
    }, {
        dataField: 'endDate',
        text: 'End Date'
    }, {
        dataField: 'member',
        text: 'Member'
    }, {
        dataField: 'description',
        text: 'Description'
    }, {
        dataField: 'tripStatus',
        text: 'Status'
    }, {
        text: 'Action'
    }];
    
  return (
    <div className="tripList">
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Trips List</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <BootstrapTable keyField='id' data={ products } columns={ columns } pagination={ paginationFactory() }/>
            </Modal.Body>

            <Modal.Footer>
                {/* <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button> */}
            </Modal.Footer>
        </Modal.Dialog>
    </div>
  )
}

export default TripList
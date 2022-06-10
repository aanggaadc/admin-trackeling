import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import './TripList.scss'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import { Card, Button, Tooltip, OverlayTrigger, Container } from 'react-bootstrap';
import { FaEdit, FaTrash } from "react-icons/fa";

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
      text: 'Trip ID',
    }, {
      dataField: 'tripName',
      text: 'Trip Name',
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
        dataField: '',
        text: 'Action',
        formatter: (cell, row)=>{
            return(
                <div>
                  <Button variant='none'>
                    <FaEdit color='blue'/>
                  </Button>
                  <Button variant='none'>
                    <FaTrash color='red'/>
                  </Button>
                </div>
            )     
        }
    }];
    
  return (
    <div className="tripList">
        <div className="listContainer">
        <Container>
          <Card className='mt-3'>
            <Card.Header>Trip List</Card.Header>
            <Card.Body >
              <BootstrapTable keyField='id' data={ products } columns={ columns } pagination={ paginationFactory() }/>
            </Card.Body>
          </Card>
        </Container>
      
        </div>        
    </div>
  )
}

export default TripList
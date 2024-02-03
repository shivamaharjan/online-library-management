import React from 'react'
import DefaultLayout from '../../components/layouts/DefaultLayout'
import Carousels from '../../components/carousels/Carousels'
import { Col, Container, Row } from "react-bootstrap";

function Home() {
  return (
    <div>
       <DefaultLayout>
        <Carousels/>
        <Container className='mt-5'>
      <Row>
        <Col>
          <h1>Available Books</h1>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-wrap g-2 justify-content-around">
        </Col>
      </Row>
    </Container>

        
       </DefaultLayout>
    </div>
  )
}

export default Home
import React from 'react';
import {Container,Row,Col,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <div>
        <Container>
          <Row className='justify-content-center'>
            <Col className="d-flex justify-content-center align-items-center" >
            <NavDropdown title='Menu' id="nav-dropdown">
              <NavDropdown.Item eventKey="0.1" href="/live">Live Game</NavDropdown.Item>
              <NavDropdown.Item eventKey="0.2" href="/html">Live score</NavDropdown.Item>
              <NavDropdown.Item eventKey="0.3" href="/polling">Polling</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="0.4" href="/">reload to homepage</NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col  className=""><img className='img-fluid' src="./images/logo.png" alt="headimage"></img></Col>
            <Col className="d-flex justify-content-center align-items-center"><a href="/"><i className='fa-share-alt ' style={{color:"black"}}>share</i></a></Col>
          </Row>
        </Container>
    </div>
  )
}

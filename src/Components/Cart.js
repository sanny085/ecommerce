import React from 'react'

import { Container, ListGroup, ListGroupItem, Button, CardHeader, CardBody, Card, CardFooter, Col, Row } from "reactstrap";

const Cart = ({cartItem, removeItem, buyNow }) => {
    let amount = 0;
    
    cartItem.forEach( item => {
        amount = parseFloat(amount) +parseFloat(item.productPrice);
    } )

    return (
        <Container fluid>
          <h1 className="text-success">Your Cart</h1>
          <ListGroup>
          {cartItem.map( item => (
             <ListGroupItem key={item.id}>
              <Row>
                  <Col>
                      <img src={item.tinyImage} height="60"/>
                  </Col>
                  <Col className="text-center">
                       <div className="text-primary">
                            {item.productName}
                       </div>
                    <span>Price : - {item.productPrice}</span>
                    <Button color="danger" onClick={ ()=>{removeItem(item)} }>Remove</Button>
                  </Col>
              </Row>
             </ListGroupItem>
          ))}
          </ListGroup>
          
        
        </Container>
    )
}

export default Cart;

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
          {
            cartItem.length >=1 ? (
                <Card>
                    <CardHeader>
                       <span className="text-warning">Total Price : </span>  
                    </CardHeader>
                    <CardBody>
                        <h6 className="text-secondary">Your Amount for {cartItem.length} Product is {amount}</h6>
                        <Button color="warning" onClick={buyNow}>Pay Now</Button>
                    </CardBody>
                </Card>
            ) : (
                 <h5 className="text-warning">Cart is empty</h5>
            )
          }
          <ListGroup>
          {cartItem.map( item => (
             <ListGroupItem key={item.id}>
              <Row>
                  <Col>
                      <img src={item.tinyImage} height="60"/>
                  </Col>
                  <Col >
                       <div className="text-primary">
                            {item.productName}
                       </div>
                    <span className="text-dark">Price : {item.productPrice}</span>
                    <Button color="danger"className="btn-sm"  onClick={ ()=>{removeItem(item)} }>Remove</Button>
                  </Col>
              </Row>
             </ListGroupItem>
          ))}
          </ListGroup>
        
         
        </Container>
    )
}

export default Cart;

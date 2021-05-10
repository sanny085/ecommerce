import React, { useState } from 'react'

import { Container, ListGroup, ListGroupItem, Button, CardHeader, CardBody, Card, Col, Row } from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
    const [limit, setLimit] = useState(1);
    
    let amount = 0; 
    let totalamount = 0; 
 
    cartItem.map( item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice);
        totalamount = parseFloat(amount) * parseFloat(limit);
        console.log("Quantity is from gloabl: "+ limit);
    });
    
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
                        <h6 className="text-secondary">Your Amount for <span className="text-dark">{cartItem.length} </span> 
                         Product is <span className="text-dark">{totalamount}</span></h6>
                        <Button color="warning" onClick={buyNow}>Pay Now</Button>
                    </CardBody>
                </Card>
            ) : (
                <Card>
                    <CardBody>
                    <h5 className="text-warning">Cart is empty</h5> 
                    </CardBody>     
                </Card>
          )
        }
          <ListGroup>
         { cartItem.map( item => (
             <ListGroupItem key={item.id}>
              <Row>
                  <Col>
                      <img src={item.tinyImage} height="58" height="70" alt={item.productName} className="img-fluid mx-auto d-block" />
                  </Col>
                  <Col>
                       <div className="text-primary">
                            {item.productName}
                       </div>
                    <div className="text-dark">Price : {item.productPrice}</div>
                    <div className="text-dark">Quantity :  &nbsp;
                    
                        <span className="h4 cursor" onClick={()=> item.quantity > 1 ? setLimit(limit-1) : setLimit(1)}><strong>-</strong></span>
                         &nbsp;&nbsp; { item.quantity = limit } &nbsp;&nbsp;
                        <span className="h4 cursor" onClick={()=> item.quantity < 30 ? setLimit(limit+1) : alert('Maximum product added')}><strong>+</strong></span>
                    
                    </div>
                    <Button color="danger"className="btn-sm"  onClick={ ()=>{removeItem(item)} }>Remove</Button>
                  </Col>
              </Row>
             </ListGroupItem>
          ))
         }
          </ListGroup>
    </Container>
  )
}


export default Cart;


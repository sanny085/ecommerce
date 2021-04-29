import React from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';

const CartItem = ({product1, addInCart}) => {
    return (
        <div>
            <Card>
              <CardImg top height="130"  width="100%" src={product1.smallImage} alt={product1.productName} />
              <CardBody className="text-center">
                <CardTitle className="text-dark">{ product1.productName }</CardTitle>
        
                <CardText className="text-secondary">Price: RS { product1.productPrice}</CardText>
                <Button color="success" onClick={()=>{addInCart(product1)}}>Buy Now</Button>
              </CardBody>
            </Card>
        </div>
    )
}
export default CartItem;

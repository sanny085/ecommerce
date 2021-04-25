import React, { useState, useEffect } from "react";
import Axios  from "axios";

import { random, commerce, datatype } from "faker";
import { Container, Col, Row } from "reactstrap";

import CartItem from "./CartItem";


const apiKey = "INSET_YOUR_KEY_HERE";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

const localurl = "https://api.npoint.io/ba9493f750096240eb35";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

    // const fetchPhotos = async () => {
    //   const response = await Axios.get(url, {
    //     header: {
    //       Authorization: apiKey
    //     }
    //   });

  const fetchPhotos = async () => {
    try{
     const response = await Axios.get(localurl);
    console.log(response);
    // Destructuring from object
     const {photos} = response.data;
 
     const allProduct = photos.map( photo => ({
       smallImage: photo.src.medium,
       tinyImage: photo.src.tiny,
       productName: random.word(),
       productPrice: commerce.price(),
       id: datatype.uuid()
     }));

     setProduct(allProduct);
     
    }
    catch(err){
        console.log("Catch:"+err)
    }
};

  useEffect( () => {
    fetchPhotos();
  }, []);

  return (
    <Container>
     <h1 className="text-center text-success">BuyPage list</h1>
       <Row> 
        { 
          product.map( product1 => (
           <Col sm="6" md="4" lg="3" className="p-1" key={product1.id}>
            <CartItem  addInCart={addInCart} product1={product1}/>
           </Col>
            ))
            
          }
            
      </Row>
    </Container>
  )
};

export default BuyPage;

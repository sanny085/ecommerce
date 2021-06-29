import React, {useState} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import BuyPage from './Components/BuyPage';
import { Container, Col, Row } from "reactstrap";

import './App.css';
import Cart from './Components/Cart';

function App() {

  const [cartItem, setCartItem] = useState([]);

  const addInCart = item => {
     const isAlreadyAdded = cartItem.findIndex( function(array) {
           return array.id === item.id;
     });
     if(isAlreadyAdded !== -1) {
       toast("Already Added In Cart", {
         type : "error"
       });
       return;
     }
     setCartItem([...cartItem, item]);
     console.log(cartItem);
  };
  const buyNow = () => {
     setCartItem([]);
     toast("Purchased Successfully", {type: "success"}); 
  }; 
  const removeItem = item => {
     setCartItem(cartItem.filter( signleItem => signleItem.id !== item.id ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
        <ToastContainer/>
          <Row>
            <Col md="8">
               Ecommerce Functionality(Add)
               <BuyPage addInCart={addInCart}/>
            </Col>
            <Col md="4">
               <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );

}
export default App;

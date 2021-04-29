import React, {useState} from 'react';

import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import BuyPage from './Components/BuyPage';

import { Container, Col, Row } from "reactstrap";
import './App.css';

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
    }
    setCartItem([...cartItem, item]);
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
          <Row>
            <Col md="">
               Ecommerce Functionality(Add)
               <BuyPage addInCart={addInCart} />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;


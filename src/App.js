import React, {useState} from 'react';
import './App.css';


import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = item => {
    
    const isAlreadyAdded = cartItem.findIndex( function(array){
          return array.id === item.id;
    });
    if(isAlreadyAdded !== -1) {
      toast("Already Added In Cart", {
        type : "error"
      });
    }
    setCartItem([...cartItem, item]);

  }

  return (
    <div className="App">
      <header className="App-header">
       
         Ecommerce
        
      </header>
    </div>
  );
}

export default App;

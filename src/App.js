import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import { NotificationProvider } from './notification/NotificationService';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <NotificationProvider>
          <CartProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/contact' element={<h1>CONTACT</h1>} />
                <Route path='/item/:productId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='*' element={<h1>404 NOT FOUND</h1>} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </NotificationProvider>
      </ChakraProvider>
    </div>
  );

}

export default App;

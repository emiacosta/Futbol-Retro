import './App.css';
import NavBar from './components/NavBar/NavBar';  
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import * as React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
      <NavBar/>
      <ItemListContainer Greeting={"¡Te damos la bienvenida a la Tienda Online de Fútbol Retro!"}/>
      </ChakraProvider>
    </div>
  );
}

export default App;

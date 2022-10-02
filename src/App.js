import './App.css';
import NavBar from './components/NavBar/NavBar';  
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer Greeting={"¡Te damos la bienvenida a la Tienda Online de Fútbol Retro!"}/>
    </div>
  );
}

export default App;

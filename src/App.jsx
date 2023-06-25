import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div>
    <NavBar />
    <ItemListContainer saludo = {"Bienvenidos"} />
    <ItemCount stock={10} inicial={1} />
    </div>
  );
}

export default App;

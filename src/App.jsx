import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
    <NavBar />
    <ItemListContainer />
    <ItemDetailContainer />
    <ItemCount stock={10} inicial={1} />
    </div>
  );
}

export default App;

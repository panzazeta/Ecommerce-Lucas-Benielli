import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
      <CartContextProvider>
      <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<h2> acá van a ir los prods </h2>} />
        </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

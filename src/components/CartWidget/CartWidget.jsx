import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const {cantidadTotal} = useContext(CartContext);

  const pngCarrito = "https://cdn5.vectorstock.com/i/1000x1000/93/04/shopping-cart-icon-on-black-background-black-flat-vector-26849304.jpg";
  return (
    <div>
        <Link to="/cart">
        <img className="carrito" src={pngCarrito} alt="Carrito" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal } </strong>
        }
        </Link>
    </div>
  )
}

export default CartWidget
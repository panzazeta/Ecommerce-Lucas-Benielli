import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css";

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext (CartContext)

    if (cantidadTotal === 0) {
        return (
            <>
             <h2> No hay productos en el carrito </h2>
             <Link to="/" className="button-link"> Ver Productos</Link>
            </>
        )
    }
  return (
    <div className="cart-lista">
        {carrito.map(producto =>  <CartItem key={producto.id} {...producto} /> )}
        <h3> Cantidad Total : {cantidadTotal} libros</h3>
        <h3> Total: ${total} </h3>
        <button onClick= {() => vaciarCarrito()}> Vaciar carrito</button>
        <Link to="/checkout"> Finalizar Compra</Link>
    </div>
  )
}

export default Cart
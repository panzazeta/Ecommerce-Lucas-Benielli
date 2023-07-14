import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import "./ItemDetail.css" 


const ItemDetail = ({id, nombre, precio, img, stock, descripcion}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext (CartContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  }

  return (
    <div className="item-detail">
        <h3>Nombre: {nombre}</h3>
        <h3>Precio: ${precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>{descripcion}</p>
        {
          agregarCantidad > 0 ? (
            <div>
              <Link to="/cart"> Terminar compra </Link> 
              <Link to="/"> Seguir comprando </Link>
            </div>) : 
          (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
    </div>
  )
}

export default ItemDetail
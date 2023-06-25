import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className="producto-container">
        <img className="imgProducto" src={img} alt={nombre} />
          <h3>{nombre} </h3>
          <p> Precio: ${precio} </p>
          <p> Id: {id} </p>
         <Link className="btnProducto" to={`/item/${id}`}>Ver Detalles</Link>
    </div>
  )
}

export default Item
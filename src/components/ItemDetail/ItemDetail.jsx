import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className="item-detail">
        <h3>Nombre: {nombre}</h3>
        <h3>Precio: ${precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Estado: en stock</p>
    </div>
  )
}

export default ItemDetail
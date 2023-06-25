import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos } from "../../asyncmock"

const ItemListContainer = ({saludo}) => {
  const [productos,setProductos] = useState([]);
  
  useEffect( () => {
    getProductos()
      .then(respuesta => setProductos(respuesta))
  }, [])

  return (
    <div>
      <h2>Libros disponibles</h2>
      <ItemList productos={productos} />

    </div>
  ) 
}

export default ItemListContainer

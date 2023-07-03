import { useState,  } from "react"
import "./ItemCount.css"

const ItemCount = ({stock, inicial, funcionAgregar}) => {
    const[contador, setContador] = useState(inicial);

    const incrementarContador = () => {
        if(contador < stock) {
            setContador(contador + 1)
        }
    }

    const disminuirContador = () => {
        if(contador > inicial) {
            setContador(contador - 1)
        }
    }

  return (
    <div className="contador">
        <button onClick={disminuirContador}> - </button>
        <strong> {contador} </strong>
        <button onClick={incrementarContador}> + </button>
        <button onClick={() => funcionAgregar(contador)}> Agregar al carrito </button>
   </div>
  )
}

export default ItemCount
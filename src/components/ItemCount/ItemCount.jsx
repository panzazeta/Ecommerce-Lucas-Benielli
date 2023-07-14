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
        <button className="counter-button" onClick={disminuirContador}> - </button>
        <strong className="counter-value">{contador}</strong>
        <button className="counter-button" onClick={incrementarContador}> + </button>
        <button className="agregar-button" onClick={() => funcionAgregar(contador)}> Agregar al carrito </button>
   </div>
  )
}

export default ItemCount
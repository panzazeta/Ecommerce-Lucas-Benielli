import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import "./Checkout.css"


const Checkout = () => {
    const { carrito, vaciarCarrito, cantidadTotal } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

const manejadorFormulario = (e) => {
    e.preventDefault();
    
    if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
        setError("Por favor, complete todos los campos");
        return;
    }
    if (email !== emailConfirmacion) {
        setError("Los campos del email no coinciden");
        return;
    }

    const orden = {
        items: carrito.map( producto => ({
            id: producto.item.id,
            nombre: producto.item.nombre,
            cantidad: producto.cantidad
        })),
        total: cantidadTotal,
        nombre,
        apellido,
        telefono,
        email,
        fecha: new Date()
    };

    addDoc(collection (db, "ordenes"), orden)
        .then(docRef => {
            setOrderId(docRef.id);
            vaciarCarrito();
        })
        .catch(error => {
            console.log("Error al crear la orden: ", error);
            setError("Se produjo un error al crear la orden. Vuelva a intentar en unos segundos")
        })
}

  return (
    <div>
        <h2>Checkout</h2>
        <form onSubmit={manejadorFormulario} className="checkout-form">
            {carrito.map(producto => (
                <div key={producto.id}>
                    <p>
                        {producto.item.nombre} x {producto.cantidad}
                    </p>
                    <p>
                        Precio $ {producto.item.precio} </p>
                    <hr />
                </div>
            ))}
            <hr />
                <div>
                    <label htmlFor="nombre"> Nombre:   </label>
                    <input type="text" className="checkout-input" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="apellido"> Apellido:   </label>
                    <input type="text" className="checkout-input" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="telefono"> Teléfono:   </label>
                    <input type="text" className="checkout-input" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor=""> Correo electrónico:   </label>
                    <input type="email" className="checkout-input" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor=""> Confirmar correo:   </label>
                    <input type="text" className="checkout-input" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error &&   <p style={{color: "red"}}>{error}</p>
                }
                <button type="submit" className="checkout-button"> Finalizar Compra </button>
        </form>
        {
            orderId && (
            <strong> ¡Gracias por tu compra! Tu número de orden es {orderId} </strong>
            )
        }

    </div>
  )
}

export default Checkout
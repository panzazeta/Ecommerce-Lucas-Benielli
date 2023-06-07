import "./CartWidget.css";

const CartWidget = () => {
  const pngCarrito = "https://cdn5.vectorstock.com/i/1000x1000/93/04/shopping-cart-icon-on-black-background-black-flat-vector-26849304.jpg";
  return (
    <div>
        <img className="carrito" src={pngCarrito} alt="Carrito" />
        <strong>3</strong>
    </div>
  )
}

export default CartWidget
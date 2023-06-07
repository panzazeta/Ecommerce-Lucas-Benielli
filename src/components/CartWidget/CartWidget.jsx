import "./CartWidget.css";

const CartWidget = () => {
  const pngCarrito = "https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cart-shopping-cart-icon-png-free-illustration-image_2284387.jpg";
  return (
    <div>
        <img className="carrito" src={pngCarrito} alt="Carrito" />
        <strong>3</strong>
    </div>
  )
}

export default CartWidget
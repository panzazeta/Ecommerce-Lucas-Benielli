import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <header>
        <h1>Librería Online</h1>
        <nav>
            <ul>
                <li>Novelas</li>
                <li>Cuentos</li>
                <li>Poesía</li>
                <li>Arte</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar
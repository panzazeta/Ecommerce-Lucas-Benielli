import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
        <Link to={"/"}>
          <h1>Carver Libros</h1>
        </Link>
        <nav>
            <ul>
                <li>
                  <NavLink to={"/categoria/2"}> Novelas </NavLink>
                </li>
                <li>
                  <NavLink to={"/categoria/3"}> Poesía </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar
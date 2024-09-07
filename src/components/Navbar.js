import '../styles/Navbar.css'
import { goToCart, goToSearch, goBack } from './controlers'

function Navbar(props) {

    return (
        <nav className="navbar">
            <ul className="name">
                <li onClick={() => goBack(props)}>Torque</li>
            </ul>

            <ul className="right-options">
                <li onClick={() => goToSearch(props)}>Search</li>
                <li onClick={() => goToCart(props)}>Cart</li>
            </ul>
        </nav>
    )

}

export default Navbar
import '../styles/Navbar.css'

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="name">
                <li>Dual</li>
            </ul>

            <ul className="right-options">
                <li>Search</li>
                <li>Filter</li>
                <li onClick={props.handleClick}>Cart</li>
                <li>Users</li>
            </ul>
        </nav>
    )

}

export default Navbar
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { dataContext } from '../context/DataContext';
import { TotalItems } from '../totalItems/TotalItems';
import './navbar.css'

export function NavBar() {

    const { cart } = useContext(dataContext)

    return (
        <div className='nav-container'>
            <nav className='navbar'>
                <Link to={"/"}>
                    <h1 className='navbar-logo'>Shop.</h1>
                </Link>
                <Link className='seeCarrito' to={"/cart"}>
                    🛒
                    {cart.length > 0 ? <TotalItems /> : null}
                </Link>
            </nav>
        </div>
    )
}
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <header className="header">
            <Link to='/'><h1><img src={logo} alt="logo" className="logo" /></h1></Link>
            <ul>
                <NavLink to='/'><li >About</li></NavLink>
                <NavLink to='/home'><li>Home</li></NavLink>
                <NavLink to='/products'><li>Products</li></NavLink>
                <NavLink to='/cart'><li>Cart</li></NavLink>

            </ul>
        </header>
    )
}

export default Header

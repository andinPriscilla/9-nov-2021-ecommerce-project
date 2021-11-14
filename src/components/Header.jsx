import { Link, NavLink } from 'react-router-dom'
import logo2 from '../assets/logo2.png'
const Header = () => {
    return (
        <header className="header">
            <Link to='/'><h1><img src={logo2} alt="logo" className="logo" /></h1></Link>
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

import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
      <nav className="NavBar" >
        <Link to='/'>
          <h3>Ecommerce</h3>
        </Link>
        <div className="Categories">
          <NavLink to='/category/gabinete' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Gabinete</NavLink>
          <NavLink to='/category/monitores' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Monitores</NavLink>
          <NavLink to='/category/coolers' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Coolers</NavLink>
        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar
import React from 'react'
import './Navbar.css'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (<>
    <div className="nav">
        <div className="navlogo">Ev-olution</div>
        <ul className="nav-menu">
            <li><Link className='a b' to=''>Home</Link></li>
            <li><Link to='/explore' className='b a'>Explore</Link></li>
            <li><Link to='./about' className='b a'>About</Link></li>
         <li ><Link className='nav-contact a' to="/contact">Contact</Link></li>
        </ul>
    </div>
    <Outlet/>
  </>
  )
}

export default Navbar
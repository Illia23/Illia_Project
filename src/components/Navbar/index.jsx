import React from 'react'
import { NavLink } from 'react-router-dom'
import header from './NavBar.module.css'
const Header = () => {
  return (
    <>
     <nav className={header.nav} >
      <ul className={header.list} >
        <li className={header.item}  >
          <NavLink   to="/" exact="true" >
            Home
          </NavLink>
        </li>
        <li className={header.item}>
          <NavLink  to="/examples" >
             Examples
          </NavLink>
          </li>
          
        <li className={header.item}>
          <NavLink  to="/contacts" >
             Contact
          </NavLink>
        </li>
        {/* Додайте інші посилання за потребою */}
      </ul>
    </nav>
      <div className={header.line}></div>
      </>
  )
}

export default Header
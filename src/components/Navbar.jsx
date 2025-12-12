import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-red-500 h-[10vh] flex items-center justify-between p-3 '>
        <div className='font-bold text-2xl text-white'>
        Logo
        </div>

        <ul className='flex justify-center items-center gap-6'>
                <li>
                <NavLink to='/' >
                Home
                </NavLink>
                </li>

                <li>
                <NavLink to='/about'>
                Abogdwdut
                </NavLink> 
                </li>

                <li>
                <NavLink to='/services'>
                Services
                </NavLink> 
                </li>

                <li>
                <NavLink to='/contact'>
                Contact
                </NavLink> 
                </li>
                <li>
                <NavLink to='/product'>
                Product
                </NavLink> 
                </li>

            
        </ul>
                <NavLink to="/customer/Emil">Emil</NavLink> | 
        <NavLink to="/customer/Tobias">Tobias</NavLink> |
        <NavLink to="/customer/Linus">Linus</NavLink>
    </nav>
  )
}

export default Navbar
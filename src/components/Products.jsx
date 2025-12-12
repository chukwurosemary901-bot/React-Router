import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const navLinkStyles = ({ isActive }) => ({
  color: isActive ? 'green-300' : 'black',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

const Products = () => {
  return (
    <div>
        
      <NavLink to='/product/car' style={navLinkStyles}>Car</NavLink> <br />
      {/* <NavLink>Bike</NavLink>  */}
   <Outlet/>  </div>
   
  )
}

export default Products
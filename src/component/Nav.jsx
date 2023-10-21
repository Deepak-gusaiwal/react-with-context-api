import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({setSearchVal,searchVal}) => {
 

  return (
    <nav>
      <Link to="/" className="logoBox">LOGO</Link>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      
      <input value={searchVal} onChange={(e)=>{setSearchVal(e.target.value)}} className='searchBox' type="text" name="" id="" placeholder='search' />
    </nav>
  )
}

export default Nav

import React from 'react'
import './index.css'
import Input  from '../../Component/Input'
import { Link } from 'react-router-dom'

const index = ({search,setSearch}) => {
  return (
    <div className='Navbar'>
        <div className='nav-left'><Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>MovieDay</Link></div>
        <div className='nav-right'>
        <ul className='nav-list'>
            <li><Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search movie'/></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        </div>

    </div>
  )
}

export default index
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        
            <nav class="navbar navbar-dark bg-dark">
                <div className='container'>
                <h3>
                    <a class="navbar-brand" Link to='/'>Logo</a>
                </h3>

                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active"><Link to='/' class="nav-link"> HOME</Link></li>
                    <li class="nav-item"><Link to='/shop' class="nav-link">SHOP</Link></li>
                    <li class="nav-item"><Link to='/count' class="nav-link">COUNTER</Link></li>
                    <li class="nav-item"><Link to='/aboutme' class="nav-link">ABOUT ME</Link></li>
                </ul>
                </div>
            </nav>
    )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        
            <nav className="navbar navbar-dark bg-dark">
                <div className='container'>
                <h3>
                    <a className="navbar-brand" Link to='/'>Logo</a>
                </h3>

                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active"><Link to='/' className="nav-link"> HOME</Link></li>
                    <li className="nav-item"><Link to='/shop' className="nav-link">SHOP</Link></li>
                    <li className="nav-item"><Link to='/count' className="nav-link">COUNTER</Link></li>
                    <li className="nav-item"><Link to='/aboutme' className="nav-link">ABOUT ME</Link></li>
                    <li className="nav-item"><Link to='/todo' className="nav-link">To Do</Link></li>
                </ul>
                </div>
            </nav>
    )
}

export default Navbar
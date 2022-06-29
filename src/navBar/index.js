import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <h3>Logo</h3>
            <ul>
                <li><Link to='/'> HOME</Link></li>
                <li><Link to='/shop'>SHOP</Link></li>
                <li><Link to='/count'>COUNTER</Link></li>
                <li><Link to='/aboutme'>ABOUT ME</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
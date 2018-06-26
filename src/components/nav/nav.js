import React from 'react'
import { Link } from 'react-static'

import './nav.scss'

const HeaderNav = (props) => (

    <nav className={`nav ${props.className || ''}`}>
        <ul>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>

)

const FooterNav = (props) => (
    <nav className={`nav ${props.className || ''}`}>
        <ul>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
)

export { HeaderNav, FooterNav }
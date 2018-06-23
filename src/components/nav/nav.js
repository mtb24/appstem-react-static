import React from 'react'
import { Link } from 'react-static'

import './nav.scss'

export default (props) => (

    <nav className={`nav ${props.className || ''}`}>
        <ul>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/culture">Culture</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/test">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>

);
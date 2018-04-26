import React from 'react'
import { Link } from 'react-static'

import './nav.css'

export default (props) => (
    <nav className={props.className}>
        <Link to="/work">Work</Link>
        <Link to="/services">Services</Link>
        <Link to="/culture">Culture</Link>
        <Link to="/#">Blog</Link>
        <Link to="/contact">Contact</Link>
    </nav>
);
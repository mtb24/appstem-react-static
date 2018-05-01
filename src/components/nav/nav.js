import React from 'react'
import { Link } from 'react-static'
import Hamburger from './hamburger'

import './nav.css'

export default (props) => (
    <div>
    <Hamburger />
    <nav className={props.className}>
        <Link to="/work">Work</Link>
        <Link to="/services">Services</Link>
        <Link to="/culture">Culture</Link>
        <Link to="/#">Blog</Link>
        <Link to="/contact">Contact</Link>
    </nav>
    </div>
);
import React from 'react'
import { Link } from 'react-static'
import Nav from '../nav/nav'
import Img from 'react-image'
import Logo from '../../../public/assets/images/main-pages/icons/Appstem Logo_white.png'
import { BeatLoader } from 'react-spinners'
import './header.scss'

export default () => (

    <div className={ 'header' }>
            <Link to="/">
                <Img className='header-logo'
                    src={ Logo }
                    alt='Appstem company logo'
                    loader={ <BeatLoader color={'#3cd52e'} loading={ true } /> } />
            </Link>

            <Nav className='all-caps' />
    </div>

);
import React from 'react'
import { Link } from 'react-static'
import TwitterIcon from './icons/twitter-icon'
import FacebookIcon from './icons/facebook-icon'
import InstagramIcon from './icons/instagram-icon'
import MediumIcon from './icons/medium-icon'

import './social-icons.css'

export default () => (

    <div className={ 'social-icons-wrapper' }>
        <Link to='https://twitter.com/appstem'>  
            <TwitterIcon
                fillColor='#fefefe'
                className='social-icon-twitter'
                width='40'
                height='40'
            />
        </Link>
        <Link to='https://www.facebook.com/appstemmedia'>        
            <FacebookIcon
                fillColor='#fefefe'
                className='social-icon-facebook'
                width='40'
                height='40'
            />
        </Link>
        <Link to='https://www.instagram.com/appstem'>
            <InstagramIcon
                fillColor='#fefefe'
                className='social-icon-instagram'
                width='40'
                height='40'
            />
        </Link>
        <Link to='https://medium.com/appstem'>
            <MediumIcon
                fillColor='#fefefe'
                className='social-icon-medium'
                width='40'
                height='40'
            />
        </Link>
    </div>
)

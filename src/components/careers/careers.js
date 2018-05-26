import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
import Hero from '../hero/hero'
import Cta from '../layout/page-section/cta'
import Collapsible from 'react-collapsible'
import backgroundImage from '../../../public/assets/images/main-pages/large/bg_careers.jpg'
import timeIcon from '../../../public/assets/images/main-pages/icons/ic-time@2x.png'
import locationIcon from '../../../public/assets/images/main-pages/icons/ic-destination-outline@2x.png'
import circleButton from '../buttons/circle-button/circle-button'
import './careers.scss'

export default withRouteData(({ careers, openings }) => {
  
    return (

        <React.Fragment>

            <Hero title={ careers.title } 
                    heroType='image' 
                    backgroundImage={ backgroundImage } 
                    className='angle--bottom-right' />

            <div className='careers-wrapper angle--both-left-right'>

                <Cta heading='About Appstem' className='about-appstem'>
                    <p>Our mission is to make purpose-built apps that serve real needs in people’s lives. We use metrics-driven mobile strategies, human-centered design and efficient development to create apps that people want to use.</p>
                </Cta>

                <Cta heading='Why Appstem' className='why-appstem'>
                    {convert(careers.contents)}
                </Cta>

                <Cta heading='Open Positions' className='open-positions'>
                    {
                        /* accordion here */
                        //console.log('open positions: ', openings)
                        openings.map( (job, i) => {
                            const triggerEl = (
                                <div className='job-opening-trigger'>
                                    <div className='job-title all-caps'>{ job.role }</div>
                                    <div className='job-meta'>
                                        <div className='job-type'><img src={ timeIcon } alt='Icon for job type'/> { job.type }</div>
                                        <div className='job-location'><img src={ locationIcon } alt='Icon for job location'/> { job.location }</div>
                                        <div className='trigger-button'>{ circleButton }</div>
                                    </div>
                                </div>
                            )
                            return (
                                <Collapsible key={ `job-${i}` } trigger={ triggerEl }>
                                    { convert( job.contents ) }
                                </Collapsible>
                        )})
                    }
                </Cta>

                <p className='send-an-email'>You can’t find what you are looking for, send us an email <br/><span>careers@appstem.com</span></p>

            </div>

        </React.Fragment>
)})
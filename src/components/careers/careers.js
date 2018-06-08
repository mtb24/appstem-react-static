import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
import Hero from '../hero/hero'
import Cta from '../layout/page-section/cta'
import Collapsible from 'react-collapsible'
import backgroundImage from '../../../public/assets/images/main-pages/large/bg_careers.jpg'
import timeIcon from '../../../public/assets/images/main-pages/icons/ic-time@2x.png'
import locationIcon from '../../../public/assets/images/main-pages/icons/ic-destination-outline@2x.png'
import openButton from '../../../public/assets/images/icons/chevron-right.svg'
import closeButton from '../../../public/assets/images/icons/circle-outline-with-x.svg'
import Button from '../buttons/base-button/button'
import AngledSection from '../layout/page-section/angled-section'
import './careers.scss'

export default withRouteData(({ careers, openings }) => {

    const open = <img className='trigger-button' alt='circle icon to open panel' src={ openButton }/>
    const close = <img className='trigger-button' alt='circle icon to close panel' src={ closeButton }/>
  
    return (

        <React.Fragment>

            <Hero title={ careers.title } 
                    heroType='image' 
                    backgroundImage={ backgroundImage } 
                    className='angle--bottom-right' />

            <AngledSection className='careers-wrapper' mask='angle--both-left-right'>
                <div className='careers content-wrapper'>

                    <Cta heading='About Appstem' className='about-appstem'>
                        <p>Our mission is to make purpose-built apps that serve real needs in people’s lives. We use metrics-driven mobile strategies, human-centered design and efficient development to create apps that people want to use.</p>
                    </Cta>

                    <Cta heading='Why Appstem' className='why-appstem'>
                        {convert(careers.contents)}
                    </Cta>

                    <Cta heading='Open Positions' className='open-positions'>
                        {
                            openings.map( (job, i) => {
                                const triggerEl = (
                                    <div className='job-opening-trigger'>
                                        <div className='job-title all-caps'>{ job.role }</div>
                                        <div className='job-meta'>
                                            <div className='job-type'><img src={ timeIcon } alt='Icon for job type'/> { job.type }</div>
                                            <div className='job-location'><img src={ locationIcon } alt='Icon for job location'/> { job.location }</div>
                                            { open }
                                        </div>
                                    </div>
                                )
                                return (
                                    <React.Fragment>
                                        <Collapsible key={ i } trigger={ triggerEl } triggerOpenedClassName='rotate' >
                                            { convert( job.contents ) }
                                            <Button linkTo='#' buttonText='Apply' className='apply-button'/>
                                        </Collapsible>
                                        { i < openings.length - 1 ? <hr className='job-opening-seperator'/> : null }
                                    </React.Fragment>
                                )
                            })
                        }
                    </Cta>

                    <p className='send-an-email'>You can’t find what you are looking for, send us an email <br/><span>careers@appstem.com</span></p>

                </div>
            </AngledSection>

        </React.Fragment>
)})
import React from 'react'
import { withRouteData } from 'react-static'
import Hero from '../hero/hero'
import Cta from '../layout/page-section/cta'
import backgroundImage from '../../../public/assets/images/main-pages/bg_careers.jpg'
import AngledSection from '../layout/page-section/angled-section'
import JobOpening from '../job-opening/job-opening'
import './careers.scss'

export default withRouteData(({ careers, jobs }) => {
    // console.log('careers: ',careers)
    // console.log('jobs: ',jobs)
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
                        <ul>
                            <li>Competitive salary</li>
                            <li>Work with a smart, driven, fun group of people</li>
                            <li>Health, Dental, Vision Benefits</li>
                            <li>401K</li>
                            <li>Flexible and fun work environment (work from home Fridays)</li>
                            <li>Employees first (we will do everything in our power to keep you happy!)</li>
                            <li>Occasional get-togethers including sporting events, happy hours, dinners, group events and more!</li>
                        </ul>
                            
                        <p>To be considered, applicants must:</p>
                        <ul>
                            <li>Be authorized to work in the United States on a full-time basis for any employer</li>
                            <li>Must be able to commute to San Francisco </li>
                            <li>Have great English communication skills</li>
                            <li>We are NOT interested in working with any recruiters or third party companies of any kind</li>
                        </ul>
                    </Cta>

                    <Cta heading='Open Positions' className='open-positions'>
                        {
                            jobs.map( (job, i) => (
                                <React.Fragment key={i}>
                                    <JobOpening job={ job } />
                                    { i < jobs.length - 1 ? <hr className='job-opening-seperator'/> : null }
                                </React.Fragment>
                            ))
                        }
                    </Cta>

                    <p className='send-an-email'>You can’t find what you are looking for, send us an email <br/><span>careers@appstem.com</span></p>

                </div>
            </AngledSection>

        </React.Fragment>
)})
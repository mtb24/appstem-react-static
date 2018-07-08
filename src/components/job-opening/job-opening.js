import React from 'react'
import Collapsible from 'react-collapsible'
import timeIcon from '../../../public/assets/images/icons/ic-time@2x.png'
import locationIcon from '../../../public/assets/images/icons/ic-destination-outline@2x.png'
import Button from '../buttons/base-button/button'
import './job-opening.scss'

export default (props) => {
    
    const button = <span className='trigger-button' alt='circle icon to open and close panel'></span>
    
    const TriggerEl = (
        <div className='job-opening-trigger'>
            <div className='job-title all-caps'>{ props.job.role || 'Default Job Title' }</div>
            <div className='job-meta'>
                <div className='job-type'><img src={ timeIcon } alt='Icon for job type'/> { props.job.type || 'job type' }</div>
                <div className='job-location'><img src={ locationIcon } alt='Icon for job location'/> { props.job.location || 'job location' }</div>
                { button }
            </div>
        </div>
    )
    return (
            <Collapsible trigger={ TriggerEl } triggerOpenedClassName='opened' >

                <p>{ props.job.description || 'Job description' }</p>
            
                <div className='about-role'>
                    <h2 className='all-caps'>About The Role</h2>
                    <p>{ props.job.about || 'Job details' }</p>
                </div>
            
                <div className='skills'>
                    <h2 className='all-caps'>DESIRED SKILLS & EXPERIENCE</h2>
                    <div className='skill-wrapper'>
                        <ul>
                        {
                            props.job.skills && props.job.skills.length > 0
                            ? props.job.skills.map((skill, i) => <li key={i}>{ skill }</li>)
                            : null
                        }
                        </ul>
                    
                        <p>Nice extras:</p>
                    
                        <ul>
                        {
                            props.job.extras && props.job.extras.length > 0
                            ? props.job.extras.map((extra, i) => <li key={i}>{ extra }</li>)
                            : null
                        }
                        </ul>
                    </div>
                </div>

                <Button linkTo='#' buttonText='Apply' className='apply-button'/>

            </Collapsible>
            
    )
}
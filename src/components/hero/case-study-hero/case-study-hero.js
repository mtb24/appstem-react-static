import React from 'react'
import PrevNextArrows from '../../nav/prev-next-arrows/prev-next-arrows'
import FeatureBlock from '../../feature-block/feature-block'
import './case-study-hero.scss'

export default (props) => {

    const bgImagePath = `/assets/images/case-studies/${props.caseStudy.slug}/${props.caseStudy.heroBgImage}`

    return (
        <React.Fragment>
            <div 
                className={`hero case-study-hero ${props.className || ''}`} 
                style={ 
                    {
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${bgImagePath})`,
                        backgroundRepeat: 'no-repeat', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center center'
                    }
                }>
                <div className='content-wrapper'>
                    <PrevNextArrows prevLinkto={ props.prevLink } nextLinkto={ props.nextLink } />
                    <FeatureBlock 
                        className='case-study-hero-featureblock' 
                        imagePosition={ 'right' }
                        imageType='hero'
                        caseStudy={ props.caseStudy } />
                </div>
            </div>
        </React.Fragment>
    )
}
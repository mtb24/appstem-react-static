import React from 'react'
import universal from 'react-universal-component'
import { withRouteData } from 'react-static'
import Hero from '../hero/hero'
import SectionLinks from '../nav/section-links/section-links'
import AngledSection from '../layout/page-section/angled-section'
import './case-study.scss'

export default withRouteData(({ caseStudy }) => {
    const FailedToLoad = () => (
      <div style={{ color: 'red', padding: '2em' }} className='error'>
        <h1 style={{ left: '33%', position: 'relative' }}>Failed to load the {`${caseStudy.slug || 'ANY' }`} component!</h1>
      </div>
    )
    const Loading = () => (
      <div style={{ color: '#3cd52e', padding: '2em' }} className='loading-component'>
        <h1 style={{ left: '33%', position: 'relative' }}>Loading the {`${caseStudy.slug}`} component...</h1>
      </div>
    )
    const CaseStudyTemplate = universal(import(`./studies/${caseStudy.slug}/${caseStudy.slug}`), 
    {
      loading: Loading,
      error: FailedToLoad,
    })

    return (
        <React.Fragment>

            <Hero heroType='case-study' 
                caseStudy={ caseStudy }
                className='angle--bottom-right' />

            <div className='case-study'>
                <CaseStudyTemplate {...caseStudy} />
            </div>

            <AngledSection className='section-link-wrapper' mask='angle--bottom-right'>
              <SectionLinks className='centered' leftText='Yowza' rightText='Hubbub' centerText='All Work' />
            </AngledSection>
            
        </React.Fragment>
    )
})

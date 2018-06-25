import React from 'react'
import InstantImage from '../../../instant-image/instant-image'
import Section from '../../../layout/page-section/section'
import AngledSection from '../../../layout/page-section/angled-section'
import FullWidthImage from '../../../layout/page-section/full-width-image-section'
import Cta from '../../../layout/page-section/cta'
import Heading from '../../../layout/page-section/heading'
import Paragrapher from '../../../layout/page-section/paragrapher'
import Wireframe from '../../../wireframe/wireframe'

export default (props) => {

    // console.log('actelion: ', props)

    const imagePath = `/assets/images/case-studies/${props.slug}/`
    const logoPath = `/assets/images/company-logos/`

return (
    <React.Fragment>

        <AngledSection className='big-picture-wrapper' mask='angle--both-left-right'>
            <Cta heading='Big Picture' className='big-picture'>
                <Paragrapher paragraphs={ props.bigPicture }/>
            </Cta>
        </AngledSection>

        <FullWidthImage 
            className='first-full-image' 
            mask='angle--both-left-right'
            imagePath={ imagePath + props.fullImages[0] } />

        <Section className='why-appstem' style={{ background: '#ffffff', width: '100vw' }}>
            <Cta heading='Why Appstem'>
                <Paragrapher paragraphs={ props.whyAppstem }/>
            </Cta>
        </Section>

        <Section className='challenges' style={{ background: '#f8f8f8', width: '100vw' }}>
            <Cta heading='Challenges'>
                <Paragrapher paragraphs={ props.challenges }/>
            </Cta>
        </Section>

        <Section className='development' style={{ background: '#ffffff', width: '100vw' }}>
            <Cta heading='Design & Development'>
                <Paragrapher paragraphs={ props.development }/>
                <Wireframe imagePath={ imagePath } wireframeImages={ props.wireframeImages } alt={ `an image for ${ props.slug }` } />
            </Cta>
        </Section>

        <FullWidthImage 
            className='second-full-image' 
            mask='angle--both-left-right'
            imagePath={ imagePath + props.fullImages[1] }
            style={{ background: '#f8f8f8' }}
            alt={ props.imageAlt || `an image for ${ props.slug }` } />

        <Section className='company-blurb-section' style={{ background: '#ffffff', width: '100vw' }}>
            <div className='company-blurb-wrapper'>
                <InstantImage
                    className='company-blurb-image'
                    imageSrcs={ logoPath + props.companyLogo || '' }
                    alt={ props.imageAlt || `an image for ${ props.slug }` } />

                <div className='company-blurb-text'>
                    <Heading headingLevel='1'>{ props.companyBlurb[0] || 'Default Company Heading' }</Heading>
                    <p>{ props.companyBlurb[1] || 'Default Company Paragraph' }</p>
                </div>
            </div>
        </Section>

    </React.Fragment>
)}
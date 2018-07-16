import React from 'react'
import Section from '../../../layout/page-section/section'
import AngledSection from '../../../layout/page-section/angled-section'
import FullWidthImage from '../../../layout/page-section/full-width-image-section'
import Cta from '../../../layout/page-section/cta'
import InstantImage from '../../../instant-image/instant-image'
// import { Player, BigPlayButton, PosterImage } from 'video-react';
import Heading from '../../../layout/page-section/heading'
import Paragrapher from '../../../layout/page-section/paragrapher'
// import posterImage from '../../../../../public/assets/images/posterimage-home-bw.jpg'
import FeatureBlock from '../../../feature-block/feature-block'
import Wireframe from '../../../wireframe/wireframe'
import './j-and-j.scss'

export default (props) => {

    // console.log('props: ', props)

    const imagePath = `/assets/images/case-studies/${props.slug}/`
    const logoPath = `/assets/images/company-logos/`
    const videoPath = '/assets/videos/'

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

        <Section className='why-appstem angle--top-left' style={{ background: '#ffffff', width: '100vw', marginTop: '-7.2%' }}>
            <Cta heading='Why Appstem'>
                <Paragrapher paragraphs={ props.whyAppstem }/>
            </Cta>
        </Section>
{
        // <Player
        //     fluid={ true }
        //     preload='auto'
        //     poster={ posterImage }
        //     src={ videoPath + props.videos[0] || '' }>
        //     <BigPlayButton position="center" />
        // </Player>
}
        <Section className='challenges' style={{ background: '#ffffff', width: '100vw' }}>
            <Cta heading='Challenges'>
                <Paragrapher paragraphs={ props.challenges }/>
            </Cta>
        </Section>

        <Section className='development' style={{ background: '#ffffff', width: '100vw' }}>
            <Cta heading='Design & Development'>
                <Paragrapher paragraphs={ props.developmentText }/>
                <Wireframe imagePath={ imagePath } wireframeImages={ props.wireframeImages } alt={ `an image for ${ props.slug }` } />
            </Cta>
        </Section>

        <Section className='development-features' style={{ background: '#f8f8f8', width: '100vw' }}>
            {
                (props.devFeatures.length && props.devFeatures.length > 0)
                ?  props.devFeatures.map( (feature, i) => {      
                        const featureSet = {
                            heading: feature[1],
                            text: feature[2],
                            featureBlockImage: feature[0]
                        }
                        const imagePosition = ( i % 2 == 0 )? 'left' : 'right'

                        return (<FeatureBlock key={i} imagePosition={imagePosition} caseStudy={featureSet} slug={props.slug} imageType='case-study-feature'/> )
        
                    })
                : null
            }
        </Section>

        <Section className='company-blurb-section' style={{ background: '#ffffff', width: '100vw' }}>
            <div className='company-blurb-wrapper'>
                <InstantImage
                    className='company-blurb-image'
                    imageSrcs={ logoPath + props.companyLogo || '' }
                    alt={ props.imageAlt || `an image for ${ props.slug }` } />

                <div className='company-blurb-text'>
                    <Heading headingLevel='2'>{ props.companyBlurb[0] || 'Default Company Heading' }</Heading>
                    <p>{ props.companyBlurb[1] || 'Default Company Paragraph' }</p>
                </div>
            </div>
        </Section>

    </React.Fragment>
)}
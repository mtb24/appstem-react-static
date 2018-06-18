import React from 'react'
import Img from 'react-image'
import { Player, BigPlayButton, PosterImage } from 'video-react';
import { BeatLoader } from 'react-spinners'
import Section from '../../../layout/page-section/section'
import AngledSection from '../../../layout/page-section/angled-section'
import Cta from '../../../layout/page-section/cta'
import Heading from '../../../layout/page-section/heading'
import posterImage from '../../../../../public/assets/images/posterimage-home.jpg'
import Paragrapher from '../../../layout/page-section/paragrapher'
import './uc-davis.scss'

export default (props) => {

    console.log('props: ', props)

    const imagePath = `/assets/images/case-studies/${props.slug}/`
    const logoPath = `/assets/images/company-logos/`

return (
    <React.Fragment>
    
        <AngledSection className='big-picture-wrapper' mask='angle--both-left-right'>
            <Cta heading='Big Picture' className='big-picture'>
                <Paragrapher paragraphs={ props.bigPicture }/>
            </Cta>
        </AngledSection>

        <AngledSection 
            className='full-width-image-section' 
            mask='angle--both-left-right'
            style={ 
                {
                    backgroundImage: `url( ${props.fullImages[0] || ''} )`,
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center center'
                }
            }
        />

        <Section className='why-appstem' style={{ background: '#ffffff', width: '100vw' }}>
            <Cta heading='Why Appstem'>
                <Paragrapher paragraphs={ props.whyAppstem }/>
            </Cta>
        </Section>

        <Player
            fluid={ true }
            preload='auto'
            poster={ posterImage }
            src={ `/assets/videos/${props.video || ''}` }>
            <BigPlayButton position="center" />
        </Player>

        <Section className='challenges' style={{ background: '#f8f8f8', width: '100vw' }}>
            <Cta heading='Challenges'>
                <Paragrapher paragraphs={ props.challenges }/>
            </Cta>
        </Section>

        <Section className='development' style={{ background: '#ffffff', width: '100vw' }}>
            <Cta heading='Design & Development'>
                <Paragrapher paragraphs={ props.developmentText }/>
                {
                    (props.wireframeImages.length && props.wireframeImages.length > 0)
                    ?   props.wireframeImages.map( (image, i) => (
                            <div className='wireframes'>
                                <Img
                                    className='wireframe-image'
                                    src={ imagePath + image || '' }
                                    alt={ props.imageAlt || `an image for ${ props.slug }` }
                                    loader={ <BeatLoader color={ '#3cd52e' } loading={ true } /> } />
                            </div>
                        ))
                    : null
                }
            </Cta>
        </Section>

        <Section className='full-width-image-section' style={{ background: '#f8f8f8', width: '100vw' }}>
        <Img
            className='full-image'
            src={ imagePath + props.fullImages[1] || '' }
            alt={ props.imageAlt || `an image for ${ props.slug }` }
            loader={ <BeatLoader color={ '#3cd52e' } loading={ true } /> } />
        </Section>

        <Section className='company-blurb-section' style={{ background: '#ffffff', width: '100vw' }}>
            <div className='company-blurb-wrapper'>
                <Img
                    className='company-blurb-image'
                    src={ logoPath + props.companyLogo || '' }
                    alt={ props.imageAlt || `an image for ${ props.slug }` }
                    loader={ <BeatLoader color={ '#3cd52e' } loading={ true } /> } />

                <div className='company-blurb-text'>
                    <Heading headingLevel='1'>{ props.companyBlurb[0] || 'Default Company Heading' }</Heading>
                    <p>{ props.companyBlurb[1] || 'Default Company Paragraph' }</p>
                </div>
            </div>
        </Section>

    </React.Fragment>
)}
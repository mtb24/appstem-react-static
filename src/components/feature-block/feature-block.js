import React from 'react'
import convert from 'htmr'
import { Link } from 'react-static'
import Arrow from './arrow_white.png'
import Img from 'react-image'
import { BeatLoader } from 'react-spinners'
import './feature-block.scss'

export default props => {
    
    if(!props.caseStudy) return null 
    else {

        const pathToImages = `assets/images/case-studies/${props.caseStudy.slug}`

        return (
            <div className={ `feature-block-wrapper feature-image-${ props.imagePosition } ${ props.className || '' }`}>
            
                <Img
                    key={ `image-${ props.caseStudy.slug }` }
                    className='feature-block-image'
                    src={ `${ pathToImages }/medium/${ props.caseStudy.imageName }` }
                    alt={ props.caseStudy.imageAlt || 'an image' }
                    loader={ <BeatLoader color={ '#3cd52e' } loading={ true } /> } />

                <div className='feature-block-details'>

                    <h2>{ props.caseStudy.title }</h2>

                    <p className='feature-block-project-type'>{ props.caseStudy.type }</p>

                    <div className='feature-block-project-description'>{ convert( props.caseStudy.contents ) }</div>

                    <Link to={`/work/${ props.caseStudy.slug }/`}>View the case study <img src={ Arrow } alt='White arrow icon' /></Link>

                </div>

            </div>
        )
    }
}
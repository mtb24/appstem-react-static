import React from 'react'
import Img from 'react-image'
import { BeatLoader } from 'react-spinners'
import VisibilitySensor from 'react-visibility-sensor'

/* props
    imageSrcs = [imagePath, defaultImagePath]
    alt=''
    className=''
    lazy = {false}
 */

class InstantImage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: '',
            isVisible: false,
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange() {/*  */}

    render() {

        const RegImage = (props) => {
            
            return (
                <Img
                    alt={ `${ props.alt || 'This is a default alt ;)' }` }
                    className={`instant-image ${props.className || ''}`}
                    src={   /* last element should be default image */
                            props.imageSrcs
                    }
                    loader={
                        /* rarely needed but, show loader anim */
                        <BeatLoader color='#3cd52e' loading={ this.state.isVisible } /> 
                    }
                    unloader={
                        /* if no images found, show loader anim */
                        <BeatLoader color='#3cd52e' loading={ this.state.isVisible } />
                    } />
            )
        }
        
        /* Lazy is not yet implemented fully */
        const LazyImage = (props) => (
            <VisibilitySensor
                scrollCheck
                scrollThrottle={100}
                intervalDelay={8000}
                containment={props.containment}
                onChange={props.onChange}
                minTopValue={props.minTopValue}
                partialVisibility={props.partialVisibility}
                offset={props.offset}
                children={<RegImg className='lazy-image' {...props} />}>
        
            </VisibilitySensor>
        )

        // this.props = this.props || {}

        return !this.props.lazy
        ? <RegImage {...this.props}/>
        : <LazyImage {...this.props}/>
    }
}
export default InstantImage

import React from 'react'
import Img from 'react-image'
import { BeatLoader } from 'react-spinners'

import './image-box.scss'

class ImageBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            isVisible: false
        }
    }

    onLoadingChange(isVisible) {
        this.setState({ isVisible: isVisible })
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    };

    render() {

        return !this.props.image ? null : (
            <div className='imagebox-wrapper'>
                <Img
                    className='ib-image'
                    src={ this.props.image }
                    alt={ this.props.alt }
                    loader={ <BeatLoader color={'#3cd52e'} loading={this.state.loading} /> } />
            </div>
        )
    }
}

export default ImageBox

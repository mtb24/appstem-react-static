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
                    src={ `assets/images/main-pages/small/${this.props.image[0]}` }
                    alt={ this.props.image[1] }
                    loader={ <BeatLoader color={'#3cd52e'} loading={this.state.loading} /> } />
                <div className='ib-title'>{ this.props.image[2] || 'Title' }</div>
                <div className='ib-desc'>{ this.props.image[3] || 'Description' }</div>
            </div>
        )
    }
}

export default ImageBox

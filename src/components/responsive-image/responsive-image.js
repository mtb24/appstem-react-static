import React from 'react'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'

/* TODO: implement webp detection and use */
function testWebP() {
    const canvas = typeof document === 'object' ? 
    document.createElement('canvas') : {};
    canvas.width = canvas.height = 1;
    return canvas.toDataURL ? canvas.toDataURL('image/webp').indexOf('image/webp') === 5 : false;
}

const ResponsiveImages = (props) => (
    <ResponsiveImage
        alt={ props.alt || 'an image' }
        imageStyle={{ width: '100%' }}
    >
        <ResponsiveImageSize
            default
            minWidth={ 0 }
            path={ props.small }
        />
        <ResponsiveImageSize
            minWidth={ 768 }
            path={ props.medium }
        />
        <ResponsiveImageSize
            minWidth={ 1100 }
            path={ props.large }
        />
    </ResponsiveImage>
)

export default ResponsiveImages
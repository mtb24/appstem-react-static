import React from 'react'
import InstantImage from '../instant-image/instant-image'
import './blog.scss'

class Blog extends React.Component {

    render() {
        const imageFullPath = '/assets/images/case-studies/draftmates/DM.png'
        const defaultImageFullPath = '/fav_appstem_32x32.png'

        return (
            <React.Fragment>
                <div className="blog">

                <h1>Hi</h1>

                <InstantImage imageSrcs={ [imageFullPath,defaultImageFullPath] } alt='Hi K2!!!' />

                </div>
            </React.Fragment>
        )
    }
}
  
  export default Blog;
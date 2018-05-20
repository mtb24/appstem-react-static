import React from 'react'

export default props => {
    const fillcolor = props.fillColor || 'cadetblue'

    return (
        <svg id="facebook-icon" className={ props.className } width={props.width || "37px"} height={props.height || "37px"} viewBox="0 0 37 37"  aria-labelledby="title" xmlns="http://www.w3.org/2000/svg">
            <title id='facebook-title'>Link to our Facebook page</title>
            <g id="ic_footer_fb" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Facebook">
                    <circle id="Oval" fill='#000000' cx="18.5" cy="18.5" r="18.5"></circle>
                    <path id="ic-facebook" fill='#fafafa' d="M19.734628,26.4759505 L19.734628,18.9605285 L22.3394969,18.9605285 L22.7294888,16.0315572 L19.734628,16.0315572 L19.734628,14.1615772 C19.734628,13.313554 19.9777878,12.7356902 21.233476,12.7356902 L22.8349811,12.7349879 L22.8349811,10.1153812 C22.557866,10.0797516 21.6073144,10 20.5012934,10 C18.1922645,10 16.6115281,11.3649079 16.6115281,13.8715598 L16.6115281,16.0315572 L14,16.0315572 L14,18.9605285 L16.6115281,18.9605285 L16.6115281,26.4759505 L19.734628,26.4759505 Z"></path>
                </g>
            </g>
        </svg>
    )
}
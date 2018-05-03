import React from 'react'

export default props => {
    const fillcolor = props.fillColor || 'cadetblue'

    return (
        <svg className={ props.className } width={props.width || "36px"} height={props.height || "36px"} viewBox="0 0 36 36"  aria-labelledby="title" xmlns="http://www.w3.org/2000/svg">
            <title id='title'>Link to our Twitter page</title>
            <g id="ic_footer_medium" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Medium">
                    <circle id="Oval" fill="#000000" cx="18" cy="18" r="18"></circle>
                    <path id="ic-medium" fill="#fafafa" d="M25.9511077,13.5282048 C25.9741932,13.5469242 25.9819903,13.580151 25.9657846,13.6068261 L21.1153863,21.6491288 L17.6282549,15.8671882 L20.4069218,11.259731 C20.5066022,11.0946887 20.6906746,11 20.8755113,11 C20.9201535,11 20.9644898,11.0068638 21.0080618,11.0184074 C21.0427664,11.0274551 21.0770125,11.0388427 21.1097296,11.0553781 L25.9361251,13.5177532 L25.9416289,13.5205611 C25.945451,13.522433 25.9478971,13.5257089 25.9511077,13.5282048 Z M16.0977024,14.8177499 L20.6666412,22.3931607 L16.0977024,20.0622891 L16.0977024,14.8177499 Z M21.3529375,22.7433842 L26,15.0384979 L26,24.2716635 C26,24.7369955 25.603266,24.9117095 25.1138843,24.6619621 L21.3529375,22.7433842 Z M15.3046166,13.5356614 C15.3221983,13.5445531 15.3332059,13.5629604 15.3332059,13.5829277 L15.3332059,24.2716791 C15.3332059,24.6136193 15.1523441,24.8173483 14.8942759,24.8173483 C14.8026984,24.8173483 14.7013363,24.7916092 14.5947761,24.7373231 L10.4430579,22.6192281 C10.1993608,22.4949004 10,22.1657518 10,21.8877693 L10,11.5032074 C10,11.2297489 10.1447812,11.0667345 10.3513275,11.0667345 C10.4245589,11.0667345 10.5055874,11.0873258 10.5907438,11.1306923 L15.3046166,13.5356614 Z"></path>
                </g>
            </g>
        </svg>
    )
}
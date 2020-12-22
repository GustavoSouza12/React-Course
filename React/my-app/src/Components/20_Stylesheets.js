import React from 'react'
import './../Styles/myStyle.css'
function Stylesheets(props) {
    let className = props.primary ? 'primary' : ''

    return (
        <div>
            <h1 className={`${className} font-xl`}>Style</h1>
        </div>
    )
}

export default Stylesheets

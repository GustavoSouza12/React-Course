import React from 'react'


const Greet = ({name, heroName}) => {
    return (
        <div>
            <h1>OI {name}, você é o {heroName}?</h1>
        </div>
    )
}

export default Greet
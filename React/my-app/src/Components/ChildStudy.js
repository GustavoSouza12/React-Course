import React from 'react'

const ChildStudy = ({change}) => {
    return (
        <div>
            <button onClick={() => change()}>study</button>   
        </div>
    )
}

export default ChildStudy
  
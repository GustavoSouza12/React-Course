import React from 'react'

const ChildStudy = ({method}) => {
    return (
        <div>
            <button onClick={() => method('Gustavo')}>study</button>   
        </div>
    )
}

export default ChildStudy
  
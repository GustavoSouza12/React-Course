import React from 'react'

function ChildComponent({method}) {
    return (
        <div>
           <button onClick={() => method('Gustavo')}>asda</button> 
        </div>
    )
}

export default ChildComponent

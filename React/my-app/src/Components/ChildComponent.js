import React from 'react'

function ChildComponent({method}) {
    return (
        <div>
           <button onClick={() => method('Gustavo')}>Child Button</button> 
        </div>
    )
}

export default ChildComponent

import React from 'react'

function ChildComponent({method}) {
    return (
        <div>
           <button onClick={() => method('teste', 'TESTE2')}>TESTE</button> 
        </div>
    )
}

export default ChildComponent

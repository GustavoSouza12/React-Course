import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('button CLICKED')
    }
    return (
        <div>
            <button onClick={clickHandler} className="button">Click</button>
        </div>
    )
}

export default FunctionClick

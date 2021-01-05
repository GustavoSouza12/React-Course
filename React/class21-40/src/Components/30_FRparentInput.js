import React, { Component } from 'react'
import RFinput from './30_FRinput'

class FRparentInput extends Component {
    constructor(props){
        super(props)

        this.newRef = React.createRef()
    
    }
    clickHandler = () => {
        this.newRef.current.focus()
    }
    render() {
        
        return (
            <div>
                <RFinput ref={this.newRef}/>
                <button onClick={this.clickHandler}>Focus</button>
            </div>
        )
    }
}

export default FRparentInput

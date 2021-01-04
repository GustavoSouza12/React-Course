import React, { Component } from 'react'
import Input from './29_input'

class FocusInput extends Component {

    constructor(props) {
        super(props)
    

        this.setRef = React.createRef()
    }
    
    clickHandler = () => {
        this.setRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <Input ref={this.setRef}/>

                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput

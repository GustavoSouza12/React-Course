import React, { Component } from 'react'

class Input extends Component {

    constructor(props){
        super(props)

        this.setRef = React.createRef()


    }

    focusInput(){
        this.setRef.current.focus()
    }

    render(){
    return (
        <input type="text" ref={this.setRef}/>
    )
    }
}

export default Input
import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
  
        this.state = {
            text: ''
        }

        this.changeText = this.changeText.bind(this)

    }

    changeText = (A) =>{
        alert(`Alertando ${A}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent method={this.changeText}/>
            </div>
        )
    }
}

export default ParentComponent

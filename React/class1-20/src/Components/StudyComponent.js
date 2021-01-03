import React, { Component } from 'react'
import ChildStudy from './ChildStudy'

export class StudyComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            text: ''
        }
        this.changeText = this.changeText.bind(this)
    }
  

    changeText(a2){
        alert(`Esse é o ${a2}`)
    }
    
    render() {
        return (
            <div>
                <ChildStudy method={this.changeText}/>
            </div>
        )
    }
}

export default StudyComponent

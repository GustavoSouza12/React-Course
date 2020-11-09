import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }

        this.methoD = this.method.bind(this)
    }

    method(t1, t2){
        alert(`man ${t2}, man ${t1}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent method={this.methoD}/>
            </div>
        )
    }
}

export default ParentComponent

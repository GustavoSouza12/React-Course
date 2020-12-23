import React, { Component } from 'react'
import LifecycleB from './23_LifecycleB'
class LifecycleA extends Component {


    constructor(props){
        super(props)

        this.state = {
            name: 'Gustavo'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps")

        return null
    }


    componentDidMount() {
        console.log ('LifecycleA componentDidMount')
    }

    render() {
        console.log("LifecycleA render")
        return ( <div>
            <div>LifecycleA</div>
            <LifecycleB/>
         </div>   
        )
    }
}

export default LifecycleA
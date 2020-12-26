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

    shouldComponentUpdate(){
        console.log('Lifecycle A shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () =>{
        this.setState({
            name: 'GSSSSSS'
        })
    }

    render() {
        console.log("LifecycleA render")
        return ( <div>
            <div>LifecycleA</div>
            <button onClick={this.changeState}>Change state</button>
            <LifecycleB/>
         </div>   
        )
    }
}

export default LifecycleA
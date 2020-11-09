import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props){
        super(props)

        this.state = {
            message: 'HELLO'
        }

        this.changeText = this.changeText.bind(this)
    }

    changeText = () =>{
        this.setState({
            message: 'GOODBYE'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeText}>Binding Event</button>
            </div>
        )
    }
}

export default EventBind


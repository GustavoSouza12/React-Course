import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }
 
   clickHandler = () =>{
       this.setState({
           message: 'xD'
       })
   } 
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>EventBind</button>
            </div>
        )
    }
}

export default EventBind

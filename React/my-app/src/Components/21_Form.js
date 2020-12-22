import React, { Component } from 'react'

export class Form extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }

     
    }

    handlerUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    handlerCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }
    selectChange = e =>{
        this.setState({
            topic: e.target.value
        })
    }
    handlerSubmit = e => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        e.preventDefault()
    }
    render() {
        const {username, comments, topic} = this.state
        return (
           <form onSubmit = {this.handlerSubmit}>
               <div>
                   <label>Username</label>
                   <input type='text' 
                    value={username} 
                    onChange={this.handlerUsernameChange}
                   />
               </div>
               <div>
                   <label>Comments</label>
                    <textarea value={comments} onChange={this.handlerCommentsChange}></textarea>
               </div>
               <div>
                   <select value={topic} onChange={this.selectChange}>
                       <option value="react">React</option>
                       <option value="angular">Angular</option>
                       <option value="vue">Vue</option>
                   </select>
               </div>
               <button type="submit">Submit</button>
           </form>
        )
    }
}

export default Form

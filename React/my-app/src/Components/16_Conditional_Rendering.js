import { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: true

        }
        this.changeState = this.changeState.bind(this)
    }
    changeState = () =>{
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        return (
            this.state.isLoggedIn ? 
            <div>True</div> :
            <div>False</div>
        )

        // let example
        // if (this.state.isLoggedIn){
        // example = <div>False</div>
        // } else{
        //     example = <div>True</div>
        // }

        return <div>
                    
                    <button onClick={this.changeState}>Change state</button>
                </div>        
    }
}

export default UserGreeting

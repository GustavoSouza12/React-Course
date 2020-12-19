import { Component } from 'react'

export class CondtionalRendering extends Component {

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: false
        }

        // this.changeState = this.changeState.bind(this)
    }
    // changeState = () =>{
    //     this.setState({
    //         isLoggedIn: false
    //      })
    // }

    render() {
        {/* Using conditional rendering */}
        return (
            this.state.isLoggedIn ? 
            <div>True</div> :
            <div>False</div>
        )

        {/* Using variables8 */}
        // let example
        // if (this.state.isLoggedIn){
        // example = <div>False</div>
        // } else{
        //     example = <div>True</div>
        // }

        // return <div>
        //             <div>{example}</div>
        //             <button onClick={this.changeState}>Change state</button>
        //         </div>        
    }
}

export default CondtionalRendering

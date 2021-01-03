import React, { Component } from 'react'

import PureComp from './26_PureComp'
import RegComp from './26_RegComp'
import MemoComp from './27_MemoComp'

class ParentComp extends Component {

    constructor(props){
        super(props)

        this.state = {
          name: 'Gustavo'  
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Gustavo'
            })
        }, 2000);
    }

    render() {
        console.log("****** Parent component render")
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}/>
                {/* <RegComp  name={this.state.name}/> */}
                {/* <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp

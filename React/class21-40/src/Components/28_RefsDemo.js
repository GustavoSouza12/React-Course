import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props){
        super(props)

        this.infoRef = React.createRef()
        
        // this.cbref = null
        // this.setCbRef = (element) => {
        //     this.cbRef = element
        // }
    }

    componentDidMount(){
        // if (this.cbRef){
        //     this.cbRef.focus()
        // }
        this.infoRef.current.focus()
    }

    clickHandler = () =>{
        alert(this.infoRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.infoRef}/>
                {/* <input type="text" ref={this.setCbRef}/> */}
                {/* <button onClick={this.clickHandler}>Click</button> */}
            </div>
        )
    }
}

export default RefsDemo

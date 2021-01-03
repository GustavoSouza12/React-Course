import React, { Component } from 'react'

export class RegComp extends Component {
    render() {
        console.log("****** Reg component render")

        return (
            <div>
                Reg Component  {this.props.name}
            </div>
        )
    }
}

export default RegComp

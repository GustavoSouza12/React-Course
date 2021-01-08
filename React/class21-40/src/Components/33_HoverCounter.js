import React, { Component } from 'react'
import UpdatedComponent from './34_withCounter'

class HoverCounter extends Component {
    render() {
        const { count, incrementCount} = this.props
        
        return (
            <h2 onMouseOver={incrementCount} type="button"> MouseOver here {count} times </h2>
        )
    }
}

export default UpdatedComponent(HoverCounter)

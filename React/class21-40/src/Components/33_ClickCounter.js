import React, { Component } from 'react'
import UpdatedComponent from './34_withCounter'

class ClickCounter extends Component {
    render() {
        const { count, incrementCount} = this.props

        return (
            <button onClick={incrementCount} type="button"> Button clicked {count} times </button>
        )
    }
}
export default UpdatedComponent(ClickCounter)

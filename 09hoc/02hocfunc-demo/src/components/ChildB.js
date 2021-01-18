import React, { Component } from 'react'
import parent from './Parent'

class ChildB extends Component {
    render() {
        return (
            <div>
                ChildB
            </div>
        )
    }
}

export default parent(ChildB)

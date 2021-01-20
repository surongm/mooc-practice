import React, { Component } from 'react'
import parent from './Parent'

@parent
class ChildB extends Component {
    render() {
        return (
            <div>
                ChildB
            </div>
        )
    }
}

export default ChildB
// export default parent(ChildB)

import React, { Component } from 'react'
import parent from './Parent'

@parent
class ChildA extends Component {
    componentDidMount() {
        console.log('我是原始组件');
    }

    render() {
        return (
            <div>
                这是div
            </div>
        )
    }
}

export default ChildA

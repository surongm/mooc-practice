import React, { Component } from 'react'
import parent from './Parent'

@parent("告警")
class ChildA extends Component {
    getName() {
        return '我是ChildA组件'
    }
    render() {
        return (
            <div>
                ChildA
                {/* 可以直接复用 */}
                <input type='text'{...this.props} />
            </div>
        )
    }
}

export default ChildA

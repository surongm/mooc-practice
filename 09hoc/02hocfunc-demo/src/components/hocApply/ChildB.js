import React, { Component } from 'react'
import parent from './Parent'

class ChildB extends Component {

    render() {
        return (
            <div>
                ChildB
                <p>我的名字是：{this.props.name}</p>
                <p>我的年龄是：{this.props.age}</p>
                <p>我的性别是：{this.props.sex}</p>
                <input type='text'{...this.props} />
            </div>
        )
    }
}

// export default parent(ChildB, '提示1')
export default parent('提示1')(ChildB)

import React, { Component } from 'react'
import parent from './Parent'

class ChildA extends Component {
    render() {
        return (
            <div>
                {/* 引入图片 */}
                {/* <img src={require('../img/a.png')} alt='image' /> */}
                ChildA
            </div>
        )
    }
}

export default parent(ChildA)

import React, { Component } from 'react'
import parent from './Parent'

// 不报错
class ChildB extends Component {
    render() {
        return (
            <p>
                这是p
            </p>
        )
    }
}

export default parent(ChildB)

// 报错
// @parent
// export default class ChildB extends Component {
//     render() {
//         return (
//             <p>
//                 这是p
//             </p>
//         )
//     }
// }
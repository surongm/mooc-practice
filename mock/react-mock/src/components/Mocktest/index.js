import React, { Component } from 'react'
// import Mock from 'mockjs'

const Mock = require('mockjs');

export default class Mocktest extends Component {

    // 使用 Mock
    data = Mock.mock({
        'list|10': [{
            'id|+1': 1,
            'name': '@string',
            'point': '@integer',
            'birthday': '@date',
            'pic': '@image',
            'title': '@title',//标题
            'content': '@cword(100)'//文本内容
        }]
    })

    render() {
        // 输出结果
        console.log(JSON.stringify(this.data, null, 2))

        return (
            <div>
                test
            </div>
        )
    }
}

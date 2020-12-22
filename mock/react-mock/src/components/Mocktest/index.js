import React, { Component } from 'react'
import Mock from 'mockjs'
import axios from 'axios';

// const Mock = require('mockjs');

export default class Mocktest extends Component {

    // 使用 Mock
    // data = Mock.mock({
    //     'list|10': [{
    //         'id|+1': 1,
    //         'name': '@string',
    //         'point': '@integer',
    //         'birthday': '@date',
    //         'pic': '@image',
    //         'title': '@title',//标题
    //         'content': '@cword(100)'//文本内容
    //     }]
    // })

    // 使用mock定义接口数据
    data = Mock.mock('/mock/testlist', 'get', {
        status: 200,
        message: 'Mock测试数据',
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

    componentDidMount() {
        // 使用axios发送get请求
        axios.get('/mock/testlist')
            .then(function (res) {
                // handle success
                console.log(res);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render() {
        // 输出结果
        // console.log(JSON.stringify(this.data, null, 2))

        return (
            <div>
                test
            </div>
        )
    }
}

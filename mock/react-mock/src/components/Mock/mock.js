// mock.js
import Mock from 'mockjs'

// const Mock = require('mockjs');

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

// 使用mock发送请求
export default Mock.mock('/mock/mocklist1', 'get', {
    status: 200,
    message: '测试mock数据1',
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
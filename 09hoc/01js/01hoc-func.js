// 高阶函数

// 1、时间函数
setTimeout(function () {
    console.log('setTimeout')
}, 1000)

setInterval(function () {
    console.log('setInterval')
}, 1000)


// 2、ajax
$.get('/api/getTime', function(){
    console.log('获取成功')
})


// 3、数组中的应用
// some()、every()、filter()、map()、forEach()

var me = true;
// 定义一个变量 存储已经下了的棋子的位置
var chessBoard = []
// 初始的时候棋盘全置为0 
for (let i = 0; i < 15; i++) {
    chessBoard[i] = [];
    for (let j = 0; j < 15; j++) {
        chessBoard[i][j] = 0;
    }
}

// 找到 <canvas> 元素
var chess = document.getElementById('chess')
// 创建 context 对象
// getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。
var context = chess.getContext('2d')

// 修改线的颜色
context.strokeStyle = '#BFBFBF'

// moveTo(x,y) 定义线条开始坐标
// lineTo(x,y) 定义线条结束坐标
// 用 stroke() 方法来绘制线条
// context.moveTo(0,0);
// context.lineTo(450,450);
// context.stroke();

// 画水印
// var logo = new Image();
// logo.src = './img/logo.jpg';
// // 图片加载完 才能做其他的事情
// logo.onload = function () {
//     // context.drawImage(img,x,y,width,height);
//     context.drawImage(logo, 0, 0, 450, 450);

//     drawChessBoard();
//     oneStep(0, 0, true)
//     oneStep(1, 1, false)


// 画棋子
// context.beginPath();
// // context.arc(x,y,r,sAngle,eAngle,counterclockwise);
// // 画扇形/圆 圆心坐标，半径，起止角度
// context.arc(200, 200, 100, 0, 2 * Math.PI)
// context.closePath();

// // 棋子设置渐变
// // context.createRadialGradient(x0,y0,r0,x1,y1,r1);
// // 渐变开始 结束的圆的圆心坐标、半径
// var gradient = context.createRadialGradient(200, 200, 50, 200, 200, 20)
// // 0和1 开始和结束的时候的颜色
// // 圆外边
// gradient.addColorStop(0, "#0A0A0A")
// // 圆中心
// gradient.addColorStop(1, "#636766")
// context.fillStyle = gradient;

// // 设置fill的颜色
// // context.fillStyle = "#636766";
// // fill填充   stroke描边
// context.fill();
// }

// 画棋盘
var drawChessBoard = function () {
    // 14个格子 15条线
    // 每个格子30*30  上下左右留白为15px
    for (let i = 0; i < 15; i++) {
        // 画竖线  (x,y) y不变
        context.moveTo(15 + i * 30, 15);
        context.lineTo(15 + i * 30, 435);
        context.stroke();

        // 画横线  (x,y) x不变
        context.moveTo(15, 15 + i * 30);
        context.lineTo(435, 15 + i * 30);
        context.stroke();
    }
}

// 画棋子
// i, j, me 棋子的位置 是我方还是对方下
var oneStep = function (i, j, me) {
    // 画圆
    context.beginPath();
    context.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math.PI)
    context.closePath();

    // 设置棋子的渐变色
    // 设置+2 -2的偏移量
    var gradient = context.createRadialGradient(15 + i * 30 + 2, 15 + j * 30 - 2, 13, 15 + i * 30 + 2, 15 + j * 30 - 2, 0)
    // var gradient = context.createRadialGradient(15 + i * 30, 15 + j * 30, 13, 15 + i * 30 + 2, 15 + j * 30 - 2, 0)
    // 如果是黑棋
    if (me) {
        gradient.addColorStop(0, "#0A0A0A")
        gradient.addColorStop(1, "#636766")
    } else {  //白棋
        gradient.addColorStop(0, "#D1D1D1")
        gradient.addColorStop(1, "#F9F9F9")
    }
    context.fillStyle = gradient;

    context.fill();
}

drawChessBoard();
// oneStep(0, 0, true)
// oneStep(1, 1, false)

chess.onclick = function (e) {
    // 相对于棋盘的xy
    var x = e.offsetX;
    var y = e.offsetY;

    var i = Math.floor(x / 30);
    var j = Math.floor(y / 30);

    if (chessBoard[i][j] === 0) {
        oneStep(i, j, me)
        if (me) {  //黑棋置为1
            chessBoard[i][j] = 1;
        } else { //白棋置为2
            chessBoard[i][j] = 2;
        }
        me = !me;
    }

}
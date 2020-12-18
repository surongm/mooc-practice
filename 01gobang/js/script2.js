var me = true;
// 定义一个变量 存储已经下了的棋子的位置
var chessBoard = [];
// 赢法数组
var wins = [];
var count = 0;
// 赢法的统计数组
var myWin = [];  //我方赢
var computerWin = [];
// 赢的标志
var over = false;

// 初始的时候棋盘全置为0 
for (let i = 0; i < 15; i++) {
    chessBoard[i] = [];
    for (let j = 0; j < 15; j++) {
        chessBoard[i][j] = 0;
    }
}

// 赢法数组
for (let i = 0; i < 15; i++) {
    wins[i] = [];
    for (let j = 0; j < 15; j++) {
        wins[i][j] = [];
    }
}

// 所有的横线的赢法
for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 11; j++) {
        for (let k = 0; k < 5; k++) {
            wins[i][j + k][count] = true
            // count表示第0种赢法
            // wins[0][0][0] = true
            // wins[0][1][0] = true
            // wins[0][2][0] = true
            // wins[0][3][0] = true
            // wins[0][4][0] = true

            // wins[0][0][1] = true
            // wins[0][1][1] = true
            // wins[0][2][1] = true
            // wins[0][3][1] = true
            // wins[0][4][1] = true
        }
        count++;
    }
}
// 所有的竖线的赢法
for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 11; j++) {
        for (let k = 0; k < 5; k++) {
            wins[j + k][i][count] = true
        }
        count++;
    }
}
// 所有的斜线的赢法
for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
        for (let k = 0; k < 5; k++) {
            wins[i + k][j + k][count] = true
        }
        count++;
    }
}
// 所有的反斜线的赢法
for (let i = 0; i < 11; i++) {
    for (let j = 14; j > 3; j--) {
        for (let k = 0; k < 5; k++) {
            wins[i + k][j - k][count] = true
        }
        count++;
    }
}

// 五子棋总共的赢法
console.log(count)

// 赢的数组的初始化
for (let i = 0; i < count; i++) {
    myWin[i] = 0;
    computerWin[i] = 0;
}

// 找到 <canvas> 元素
var chess = document.getElementById('chess');
// 创建 context 对象
// getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。
var context = chess.getContext('2d');

// 修改线的颜色
context.strokeStyle = '#BFBFBF';

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
    // 判断是否结束
    if (over) {
        return false;
    }
    if (!me) {
        return false;
    }
    // 相对于棋盘的xy
    var x = e.offsetX;
    var y = e.offsetY;

    var i = Math.floor(x / 30);
    var j = Math.floor(y / 30);

    if (chessBoard[i][j] === 0) {
        oneStep(i, j, me);
        chessBoard[i][j] = 1;
        for (let k = 0; k < count; k++) {
            if (wins[i][j][k]) {
                myWin[k]++;
                computerWin[k] = 6;
                if (myWin[k] === 5) {
                    setTimeout(() => {
                        window.alert("你赢了")
                    }, 500)
                    over = true;
                }
            }
        }
    }

    if (!over) {
        me = !me;
        computerAI();
    }
}

var computerAI = function () {
    var myScore = [];
    var computerScore = [];
    // 最高得分
    var max = 0;
    // 最高得分的坐标
    var u = 0, v = 0;

    // 得分初始化
    for (let i = 0; i < 15; i++) {
        myScore[i] = [];
        computerScore[i] = [];
        for (let j = 0; j < 15; j++) {
            myScore[i][j] = 0;
            computerScore[i][j] = 0;
        }
    }
    // 设置对应的得分
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            if (chessBoard[i][j] == 0) {
                for (let k = 0; k < count; k++) {
                    if (wins[i][j][k]) {
                        // 我方
                        if (myWin[k] == 1) {
                            myScore[i][j] += 200;
                        } else if (myWin[k] == 2) {
                            myScore[i][j] += 1000;
                        } else if (myWin[k] == 3) {
                            myScore[i][j] += 2000;
                        } else if (myWin[k] == 4) {
                            myScore[i][j] += 10000;
                        }
                        // 计算机
                        if (computerWin[k] == 1) {
                            computerScore[i][j] += 220;
                        } else if (computerWin[k] == 2) {
                            computerScore[i][j] += 840;
                        } else if (computerWin[k] == 3) {
                            computerScore[i][j] += 2100;
                        } else if (computerWin[k] == 4) {
                            computerScore[i][j] += 15000;
                        }
                    }
                }

                if (myScore[i][j] > max) {
                    max = myScore[i][j];
                    u = i;
                    v = j;
                } else if (myScore[i][j] == max) {
                    if (computerScore[i][j] > computerScore[u][v]) {
                        u = i;
                        v = j;
                    }
                }

                if (computerScore[i][j] > max) {
                    max = computerScore[i][j];
                    u = i;
                    v = j;
                } else if (computerScore[i][j] == max) {
                    if (myScore[i][j] > myScore[u][v]) {
                        u = i;
                        v = j;
                    }
                }
            }
        }
    }
    oneStep(u, v, false);
    chessBoard[u][v] = 2;

    for (let k = 0; k < count; k++) {
        if (wins[u][v][k]) {
            computerWin[k]++;
            myWin[k] = 6;
            if (computerWin[k] === 5) {
                setTimeout(() => {
                    window.alert("计算机赢了")
                }, 500)
                over = true;
            }
        }
    }
    if (!over) {
        me = !me;
    }
}
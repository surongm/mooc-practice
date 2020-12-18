// 原始值
// var nextData = [
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0]
// ]

// var gameData = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ]

// 测试数据
var nextData = [
    [2, 2, 0, 0],
    [0, 2, 2, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

var gameData = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 0]
];

// 创建小方格div
var gameDivs = [];
var nextDivs = [];

// 游戏区创建小方块div
var initGame = () => {
    // 需要创建10*20个小方格div
    for (let i = 0; i < gameData.length; i++) {
        let gameDiv = [];
        for (let j = 0; j < gameData[0].length; j++) {
            let newNode = document.createElement('div');
            newNode.className = 'none';
            // 因为css写的是绝对定位，所以每个小方格都有自己的top left
            newNode.style.top = (i * 20) + 'px';
            newNode.style.left = (j * 20) + 'px';
            document.getElementById('game').appendChild(newNode);
            gameDiv.push(newNode);
        }
        gameDivs.push(gameDiv);
    }
}

// next区
var initNext = () => {
    // 需要创建4*4个小方格div
    for (let i = 0; i < nextData.length; i++) {
        let nextDiv = [];
        for (let j = 0; j < nextData[0].length; j++) {
            let newNode = document.createElement('div');
            newNode.className = 'none';
            // 因为css写的是绝对定位，所以每个小方格都有自己的top left
            newNode.style.top = (i * 20) + 'px';
            newNode.style.left = (j * 20) + 'px';
            document.getElementById('next').appendChild(newNode);
            nextDiv.push(newNode);
        }
        nextDivs.push(nextDiv);
    }
}

// 根据gameData里面的数据 改变gameDivs的class
var refreshGame = () => {
    for (let i = 0; i < gameData.length; i++) {
        for (let j = 0; j < gameData[0].length; j++) {
            // 根据gameData的数据 设置小方块为不同的三种状态
            if (gameData[i][j] == 0) {
                gameDivs[i][j].className = 'none';
            } else if (gameData[i][j] == 1) {
                gameDivs[i][j].className = 'done';
            } else if (gameData[i][j] == 2) {
                gameDivs[i][j].className = 'current';
            }
        }
    }
}

var refreshNext = () => {
    for (let i = 0; i < nextData.length; i++) {
        for (let j = 0; j < nextData[0].length; j++) {
            // 根据gameData的数据 设置小方块为不同的三种状态
            if (nextData[i][j] == 0) {
                nextDivs[i][j].className = 'none';
            } else if (nextData[i][j] == 1) {
                nextDivs[i][j].className = 'done';
            } else if (nextData[i][j] == 2) {
                nextDivs[i][j].className = 'current';
            }
        }
    }
}

// 调用函数
initGame();
initNext();
refreshGame();
refreshNext();

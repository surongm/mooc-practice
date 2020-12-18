// game.js

var Game = function () {
    // dom元素
    var gameDiv;
    var nextDiv;

    // 游戏矩阵
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    // 当前方块
    var cur;
    // 下一个方块
    var next;

    // divs
    var gameDivs = [];
    var nextDivs = [];

    // 初始化小方块div
    var initDiv = (container, data, divs) => {
        for (let i = 0; i < data.length; i++) {
            let div = [];
            for (let j = 0; j < data[0].length; j++) {
                let newNode = document.createElement('div');
                newNode.className = 'none';
                newNode.style.top = (i * 20) + 'px';
                newNode.style.left = (j * 20) + 'px';
                container.appendChild(newNode);
                div.push(newNode);
            }
            divs.push(div);
        }
    }

    // 刷新div
    var refreshDiv = (data, divs) => {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[0].length; j++) {
                if (data[i][j] == 0) {
                    divs[i][j].className = 'none';
                } else if (data[i][j] == 1) {
                    divs[i][j].className = 'done';
                } else if (data[i][j] == 2) {
                    divs[i][j].className = 'current';
                }
            }
        }
    }

    // 初始化方法
    var init = function (doms) {
        gameDiv = doms.gameDiv;
        nextDiv = doms.nextDiv;
        cur = new Square();
        next = new Square();
        initDiv(gameDiv, gameData, gameDivs);
        initDiv(nextDiv, next.data, nextDivs);

        // 测试数据
        cur.origin.x = 10;
        cur.origin.y = 5;
        for(let i = 0; i < cur.data.length; i++){
            for(let j = 0; j < cur.data[0].length; j++){
                gameData[cur.origin.x + i][cur.origin.y + j] = cur.data[i][j]
            }
        }

        refreshDiv(gameData, gameDivs);
        refreshDiv(next.data, nextDivs);
    }

    // 导出API
    this.init = init;
}
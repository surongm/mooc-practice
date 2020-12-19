// local.js

var Local = function () {
    // 游戏对象
    var game;

    // 时间间隔
    var INTERVAL = 400;
    // var INTERVAL = 200;
    // 定时器
    var timer = null;

    // 时间计数器
    var timeCount = 0;
    // 时间
    var time = 0;

    // 绑定键盘事件
    var bindKeyEvent = function () {
        document.onkeydown = function (e) {
            if (e.keyCode == 38) {          // up
                game.rotate();
            } else if (e.keyCode == 39) {   // right
                game.right();
            } else if (e.keyCode == 40) {   // down
                game.down();
            } else if (e.keyCode == 37) {   // left
                game.left();
            } else if (e.keyCode == 32) {   // space
                game.fall();
            }
        }
    }

    // // 移动
    // var move = function () {
    //     game.down()
    // }

    // 移动 + 固定
    var move = function () {
        timeFunc();
        if (!game.down()) {
            // 固定
            game.fixed();
            // 消行
            // game.checkClear();
            var line = game.checkClear();
            if (line) {
                game.addScore(line);
            }
            // 游戏结束
            // game.checkGameOver();
            var gameOver = game.checkGameOver();
            if (gameOver) {
                game.gameover();
                // game.gameover(false);
                stop();
            } else {
                // 出现下一个方块
                game.performNext(generateType(), generateDir());
            }
        }
    }

    // 计时函数
    var timeFunc = function () {
        timeCount += 1;
        if (timeCount == 5) {
            timeCount = 0;
            time += 1;
            game.setTime(time);
        }
    }

    // 随机生成一个方块种类
    var generateType = function () {
        // 0-6
        return Math.ceil(Math.random() * 7) - 1;
    }

    // 随机生成一个旋转次数
    var generateDir = function () {
        // 0-3
        return Math.ceil(Math.random() * 4) - 1;
    }

    // 开始
    var start = function () {
        var doms = {
            gameDiv: document.getElementById('game'),
            nextDiv: document.getElementById('next'),
            timeDiv: document.getElementById('time'),
            scoreDiv: document.getElementById('score'),
            resultDiv: document.getElementById('gameover'),
        }
        game = new Game();
        game.init(doms, generateType(), generateDir());
        bindKeyEvent();
        game.performNext(generateType(), generateDir());
        timer = setInterval(move, INTERVAL);
    }

    // 结束
    var stop = function () {
        // 关闭定时器
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        // 关闭键盘事件
        document.onkeydown = null;
    }

    // 导出API
    this.start = start;
}
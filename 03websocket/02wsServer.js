// var ws = require("nodejs-websocket")

// // Scream server example: "hi" -> "HI!!!"
// var server = ws.createServer(function (conn) {
// 	console.log("New connection")
// 	conn.on("text", function (str) {
// 		console.log("Received "+str)
// 		conn.sendText(str.toUpperCase()+"!!!")
// 	})
// 	conn.on("close", function (code, reason) {
// 		console.log("Connection closed")
// 	})
// }).listen(8001)



var ws = require("nodejs-websocket")

var port = 8001
// Scream server example: "hi" -> "hi"
var server = ws.createServer(function (conn) {
    console.log("New connection")
    conn.on("text", function (str) {
        console.log("Received " + str)
        conn.sendText(str)
        // conn.sendText(str.toUpperCase() + "!!!")
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })

    conn.on('error', function (error) {
        console.log('handle error');
        console.log(error)
    })
}).listen(port)

console.log(`websocket server listening on ${port}`)
function linearLegression(data) {
    var n = coordinates.length;
    var sigX = coordinates.reduce(function (acc, c) { return acc + c.x; }, 0);
    var sigY = coordinates.reduce(function (acc, c) { return acc + c.y; }, 0);
    var sigXX = coordinates.reduce(function (acc, c) { return acc + c.x * c.x; }, 0);
    var sigXY = coordinates.reduce(function (acc, c) { return acc + c.x * c.y; }, 0);
    // a(傾き)を求める
    var a = (n * sigXY - sigX * sigY) / (n * sigXX - Math.pow(sigX, 2));
    // b(切片)を求める
    var b = (sigXX * sigY - sigXY * sigX) / (n * sigXX - Math.pow(sigX, 2));
    console.log(a, b);
}
var coordinates = [
    { x: 20, y: 10 },
    { x: 25, y: 14 },
    { x: 30, y: 15 },
    { x: 32, y: 21 },
    { x: 30, y: 20 },
    { x: 18, y: 9 },
    { x: 19, y: 8 },
];
linearLegression(coordinates);

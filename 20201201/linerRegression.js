function linearLegression(data) {
    var n = coordinates.length;
    var X = coordinates.reduce(function (x, y) { return x + y.x; }, 0);
    var Y = coordinates.reduce(function (x, y) { return x + y.y; }, 0);
    var XX = coordinates.reduce(function (x, y) { return x + y.x * y.x; }, 0);
    var XY = coordinates.reduce(function (x, y) { return x + y.x * y.y; }, 0);
    // a(傾き)を求める
    var a = (n * XY - X * Y) / (n * XX - Math.pow(X, 2));
    // b(切片)を求める
    var b = (XX * Y - XY * X) / (n * XX - Math.pow(X, 2));
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

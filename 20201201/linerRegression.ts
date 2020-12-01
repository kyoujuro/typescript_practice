function linearLegression(data){
    
        const n = coordinates.length;
        const X = coordinates.reduce((x, y) => x + y.x, 0);
        const Y = coordinates.reduce((x, y) => x + y.y, 0);
        const XX = coordinates.reduce((x, y) => x + y.x * y.x, 0);
        const XY = coordinates.reduce((x, y) => x + y.x * y.y, 0);
        // a(傾き)を求める
        const a = (n * XY - X * Y) / (n * XX - Math.pow(X, 2));
        // b(切片)を求める
        const b = (XX * Y - XY * X) / (n * XX - Math.pow(X, 2));
        console.log(a, b)
    
}
const coordinates = [
    { x: 20, y: 10 },
    { x: 25, y: 14 },
    { x: 30, y: 15 },
    { x: 32, y: 21 },
    { x: 30, y: 20 },
    { x: 18, y: 9 },
    { x: 19, y: 8 },
  ]
linearLegression(coordinates)

function linearLegression(data){
    
        const n = coordinates.length;
        const sigX = coordinates.reduce((acc, c) => acc + c.x, 0);
        const sigY = coordinates.reduce((acc, c) => acc + c.y, 0);
        const sigXX = coordinates.reduce((acc, c) => acc + c.x * c.x, 0);
        const sigXY = coordinates.reduce((acc, c) => acc + c.x * c.y, 0);
        // a(傾き)を求める
        const a = (n * sigXY - sigX * sigY) / (n * sigXX - Math.pow(sigX, 2));
        // b(切片)を求める
        const b = (sigXX * sigY - sigXY * sigX) / (n * sigXX - Math.pow(sigX, 2));
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

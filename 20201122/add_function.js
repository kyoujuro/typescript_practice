function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
console.log(add.apply(1, null));
console.log(add.apply([1, 2], null));
console.log(add.apply(null, [1, 2]));
console.log(add.call(1, 2, null));
console.log(add.call(null, 1, 2));
console.log(add.call([10, 2], null));
console.log(add.bind(1, 2, null)());
console.log(add.bind(null, 1, 2)());

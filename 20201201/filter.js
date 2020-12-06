function filter(array, f) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (f(item)) {
            result.push(item);
        }
    }
    return console.log(result);
}
filter([1, 2, 3, 4, 5], function (_) { return _ > 3; });
//console.log()
var names = "Hello";
var sub = "World";
function message(names, sub, spaces) {
    var result = names + Array(spaces).join(' ') + sub;
    console.log(result);
}
message(names, sub, 2);
message(names, sub, 10);

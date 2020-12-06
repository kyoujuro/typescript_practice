function filter(array, f){
    let result = []
    for(let i = 0; i < array.length; i++){
        let item = array[i]
        if(f(item)){
            result.push(item)
        }
    }
    return console.log(result)
}

filter([1,2,3,4,5], _ => _ > 3)
//console.log()

var names = "Hello";
var sub = "World";

function message(names, sub, spaces){
    var result = names + Array(spaces).join(' ') + sub;
    console.log(result);
}
message(names, sub, 2);
message(names, sub, 10);

enum Subject {
    Math,
    English,
    Science
}

var test = Subject.Math;

test = 90;

console.log(Subject);
console.log(test);

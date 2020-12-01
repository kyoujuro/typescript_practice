var normRandom = function(mean, std){
    var a = Math.random()
    var b = Math.random()
    var c = Math.sqrt(-2 * Math.log(a))
    if(0.5 - Math.random() > 0){
        return c * Math.sin(Math.PI * 2 * b) * std + mean
    } else{
        return c * Math.cos(Math.PI * 2 * b) * std + mean
    }
}


var i = 0
for (i = 0; i < 10000; i++){
    //console.log(normRandom(0, 1))
    var answer:number[] =  new Array(50)
    answer.push =  normRandom(0, 1)
    //console.log(answer)
    //console.log(sum(answer))
    var total = 0
    total += normRandom(0, 1)
    
}
console.log(total)
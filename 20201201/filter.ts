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
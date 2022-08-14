export function multiResult(func, sets){
    let result = [];
    for(let i = 0; i < sets.length; i++){
        result.push(func.apply(null, sets[i]));
    }

    return result;
}
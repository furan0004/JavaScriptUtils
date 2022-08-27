export function restrictLength(str, restriction, restrictedSymbol = ""){
    return (str.length > restriction) ? str.substring(0, restriction) + restrictedSymbol : str;
}

export function createRandomString(map, length){
    let result = "";
    
    for(let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * map.length);
        result += map.substring(index, index + 1);
    }
    
    return result;
}
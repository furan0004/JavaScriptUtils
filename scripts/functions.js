export function convertToNthDecimal(decimal, N){
    const symbol = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // N is in [1, 36]
    if((N - 1)*(N - 36) > 0) return void 0;
    decimal = Math.floor(decimal);

    let logharithm = Math.floor(Math.log(decimal) / Math.log(N));

    let result = "";
    for(let i = logharithm; i >= 0; i--){
        let quotient = Math.floor(decimal / N**i);
        result += symbol[quotient];

        decimal = decimal % N**i;
    }

    return result;
}

export function sumByArray(array){
    let result = 0;
    for(let i = 0; i < array.length; i++) result += array[i];

    return result;
}

export function restrictLength(str, restriction, restrictedSymbol = ""){
    return (str.length > restriction) ? str.substring(0, restriction) + restrictedSymbol : str;
}

export function createRandomString(map, length){
    if(map.length == 0) return "";

    let result = "";

    for(let i = 0; i < length; i++) {
        result += map[Math.floor(Math.random() * map.length)];
    }
    
    return result;
}
export function convertToNthDecimal(decimal, N){
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
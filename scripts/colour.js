import{multiResult} from "../scripts/multiResult.js"

const symbol = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function toColourCode(r, g, b, a){
    return `#${multiResult(convertToNthDecimal, [[r, 16], [g, 16], [b, 16], [a, 16]]).join("")}`;
}

function convertToNthDecimal(decimal, N){
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

console.log(toColourCode(243, 163, 23, 100));
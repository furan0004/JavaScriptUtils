export function convertToNthDecimal(decimal, N){
    const symbol = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // N is in [2, 36]
    if((N - 2)*(N - 36) > 0) return void 0;
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


// factorial
export function factorial(n){
    n = parseInt(n);

    if(n < 0) return void 0;
    else if(n * (n - 1) == 0) return 1;
    else return n * factorial(n - 1);
}

export function factorialVer2(n){
    n = Math.floor(n);

    if(n < 0) return void 0;
    else if(n * (n - 1) == 0) return 1;
    else {
        let result = 1;
        for(let i = n; i > 1; i--) result *= i;

        return result;
    }
}

export function permutation(n, r){
    n = parseInt(n), r = parseInt(r);

    return factorial(n) / factorial(n - r);
}

export function combination(n, r){
    n = parseInt(n), r = parseInt(r);
    
    return factorial(n) / factorial(r) / factorial(n - r);
}


// sequence
export function sum(...num){
    let result = 0;
    for(let i = 0; i < num.length; i++) result += num[i];

    return result;
}

export function product(...num){
    let result = 1;
    for(let i = 0; i < num.length; i++) result *= num[i];

    return result;
}

// space
export function euclidNorm(...z){
    let result = 0;
    for(let i = 0; i < z.length; i++) result += z[i] ** 2;

    return result ** (1 / 2);
}


// mean
export function arithmeticMean(...x){
    return sum(...x) / x.length;
}

export function geometricMean(...x){
    return product(...x) ** (1 / x.length);
}

export function harmonicMean(...x){
    let denominator = 0;
    for(let i = 0; i < x.length; i++) denominator += 1 / x[i];

    return x.length / denominator;
}

/* generalised mean is defined at x is positive real number  */
export function generalisedMean(p, ...x){
    if(p == 0) return geometricMean(...x);
    else {
        let result = 0;
        for(let i = 0; i < x.length; i++) result += x[i] ** p;

        return (result / x.length) ** (1 / p);
    }
}

// standard calcuration
export function logBased(base, x){
    if(base * (base - 1) == 0) return void 0;
    return Math.log(x) / Math.log(base);
}

// advanced calcuratiion
export function getPrimeNumbers(sup){
    let result = [];
    a: for(let i = 0;; i++){
        let target = 2 * i + 1 + 0 ** i;
        if(target > sup) break;

        for(let j = 0; j < result.length; j++) if(target % result[j] == 0) continue a;
        result.push(target);
    }

    return result;
}

export function factorisation(n){
    n = parseInt(n);

    if(n < 0) return Array.prototype.concat([-1], factorisation(-n));
    if(n * (n - 1) == 0) return [n];

    let primes = getPrimeNumbers(n ** (1 / 2));
    for(let i = 0; i < primes.length; i++) if(n % primes[i] == 0) return Array.prototype.concat([primes[i]], factorisation(n / primes[i]));

    return [n];
}

export function factorisationVer2(n){
    n = parseInt(n);

    if(n < 0) return Array.prototype.concat([-1], factorisationVer2(-n));
    if(n * (n - 1) == 0) return [n];

    let result = [];
    let primes = getPrimeNumbers(n ** (1 / 2));
    for(let i = 0; i < primes.length; i++){
        if(n % primes[i] == 0){
            result.push(primes[i]);
            
            n /= primes[i];
            if(n > 1){
                i = -1;
                continue;
            }else break;
        }

        if(i == primes.length - 1) result.push(n);
    }


    return result;
}
const operation = require('./functions');


function main () {
    let numero1 = 10;
    let numero2 = 40;

    const resultSum = opetations.sum(numero1, numero2);
    const resultSubs = operations.substract(numero1, numero2);
    const resultMult = operations.multiply(numero1, numero2);
    const resultDivide = operations.divide(numero1, numero2);


    console.log('suma',resultSum);
    console.log('substract',resultSubs);
    console.log('miltiply',resultMult);
    console.log('divide',resultDivide);
}

main();
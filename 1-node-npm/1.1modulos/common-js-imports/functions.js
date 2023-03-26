function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//exports.sum = sum;
//this.export.sum=sum;
//exports.substract = substract;
//exports.multiply = multiply;
//exports.divide = divide; 

module.export = {
    sum:sum,
    substract,
    multiply,
    divideNumbers:divide,
};
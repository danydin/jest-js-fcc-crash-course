function sum(a, b){
    return a+b;
};


function isNumber(input) {
    if (typeof input !== 'number'){
        throw new Error('Invalid input');
    }
}

module.exports = {sum, isNumber};

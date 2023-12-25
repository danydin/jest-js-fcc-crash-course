function sum(a, b){
    return a+b;
};


function isNumber(input) {
    if (typeof input !== 'number'){
        throw new Error('Invalid input');
    }
}

function timeoutFunc(random) {
    // seTimeout takes 2 arguments, callback function and delay timeout 
    setTimeout( () => {
    random('cb func value')
    },
    1000);
}

function fetchAPromise(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
        const failedOperation = false;
            if (failedOperation) {
                reject(new Error('error')); 
            } else {
                resolve('peaunt butter');
            }
        }
        , 1000);
    });
}

module.exports = {sum, isNumber, timeoutFunc, fetchAPromise};

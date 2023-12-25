// the expect function is part of the jest library and the .toBe* functions are part of Matcha library
// MUST VERIFY EACH TEST that you can get failed for desired as well (or pass if you test for fail initally) 

const funcs = require('./funcs.js');
const sumFunc = funcs.sum;
const isNumberFunc = funcs.isNumber;
const timeoutFunc = funcs.timeoutFunc;
const fetchAPromiseFunc = funcs.fetchAPromise;


// toBe used for validating matching strings/nynbers
test('should return the sum of the two arguments', () => {
    expect(sumFunc(2,3)).toBe(4);
});

// toEqual used for validating arrays or objects
test ('object should have 2 values with matching key-pairs', () => {
    const data = {"one": 1};
    data["two"] = 2;
    expect(data).toEqual({"one":1,"two":3});
})

// toBeFalsy to check  if value is Undefined, NaN , false, 0
test ('object should be 0 / false / null / undefined / nan', () => {
    const n =  1;
    expect(n).toBeFalsy();
});

// toThrow should throw an error
test('should throw an error', () => {
    expect(()=>{
        isNumberFunc('bla')
    }).toThrow();
});

test('callback function should be called with the value in it', finished => {
    function cbF(data){
        try {
            // test if the parameter data which is called inside the timeoutFunc is equal to the given value
            expect(data).toBe('cb func value1');
            finished();
        } catch (e) {
            finished(e);
        }
    }
    timeoutFunc(cbF);
});

test('the data should be peanut butter', () => {
    return expect(fetchAPromiseFunc()).resolves.toBe('peanut butter');
});

test('the data should throw error', () => {
    return expect(fetchAPromiseFunc()).rejects.toThrow('error');
})

// just a cleaner way than promise (above lines) to call asynchonours callback
test ('the returned value from the callback should be peaunt butter1', async() => {
    const data = await fetchAPromiseFunc();
    expect(data).toBe('peaunt butter1')
})
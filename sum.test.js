// the expect function is part of the jest library and the .toBe* functions are part of Matcha library
// MUST VERIFY EACH TEST that you can get failed for desired as well (or pass if you test for fail initally) 

const funcs = require('./funcs.js');
const sumFunc = funcs.sum;
const isNumberFunc = funcs.isNumber;


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
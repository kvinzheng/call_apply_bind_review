let expect = require('chai').expect
let { sumEvenArguments } = require('./call_apply_bind_exercise.js');
let { arrayFrom } = require('./call_apply_bind_exercise.js');
let { invokeMax } = require('./call_apply_bind_exercise.js');

describe('#sumEvenArguments', function(){
  it('takes all of the arguments passed to a functin and returns the sum of the even ones', function(){
    expect(sumEvenArguments(1,2,3,4)).to.equal(6);
    expect(sumEvenArguments(1,2,6)).to.equal(8);
    expect(sumEvenArguments(1,2)).to.equal(2);
  })
})

describe('#arrayFrom', function(){
  function convert(){
    var arr = arrayFrom(arguments)
    return arr;
  }
  it("takes an array like object and converts it into an array", function(){
    var argsArr = convert();
    expect(argsArr).to.be.an('array');
  });
})

describe("#invokeMax", function(){
  function add(a,b){
      return a+b
  }
  it("returns a function that calls another function a certain amount of times", function(){

   var addOnlyThreeTimes = invokeMax(add,3);
   expect(addOnlyThreeTimes(1,2)).to.equal(3) // 3
   expect(addOnlyThreeTimes(2,2)).to.equal(4) // 4
   expect(addOnlyThreeTimes(1,2)).to.equal(3) // 3
   expect(addOnlyThreeTimes(1,2)).to.equal("Maxed Out!")
  });
});

let expect = require('chai').expect
let { sumEvenArguments } = require('./call_apply_bind_exercise.js');

describe('#sumEvenArguments', function(){
  it('takes all of the arguments passed to a functin and returns the sum of the even ones', function(){
    expect(sumEvenArguments(1,2,3,4)).to.equal(6);
    expect(sumEvenArguments(1,2,6)).to.equal(8);
    expect(sumEvenArguments(1,2)).to.equal(2);
  })
})

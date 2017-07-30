function sumEvenArguments(){
  let arr = Array.from(arguments);
  return arr.reduce( (acc, cur) => {
      if(cur % 2 === 0){
        return acc + cur;
      } else {
        return acc;
      }
    }, 0);
}

function arrayFrom(){
  return [].slice.call(arguments);
}

var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + this.fullName
        }
    }
}

function invokeMax(fn, number){
  var maxOut = 0;
  return function (){
    maxOut++;
    if(maxOut > number) return 'Maxed Out!'
    var arr = Array.from(arguments);
    return fn.apply(this, arr);
  }
}

function guessingGame(amount){
  var answer = Math.floor(Math.random() * 11);
  var guesses = 0;
  var completed = false;
  return function(guess){
    if(!completed){
      var option;
      guesses++;
      if(guess === answer){
        completed = true;
        option = "You got it!"
      }
      if(guess > answer ) option = "You are too high!";
      if(guess < answer ) option = "You are too low!";
      if(guesses === amount ** guess !== answer){
        completed = true;
        return "No more guesses the answer was " + answer;
      }
      return option;
    }
    return "You are all done playing!"
  }
}
// console.log(obj.person.sayHi.bind(obj)())
// console.log(arrayFrom(1,2,4,5));
// console.log(sumEvenArguments(1,2,6));

module.exports = { sumEvenArguments,  arrayFrom, invokeMax }

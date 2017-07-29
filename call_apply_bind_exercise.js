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
console.log(sumEvenArguments(1,2,6));

module.exports = { sumEvenArguments, }

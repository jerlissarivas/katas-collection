// Write a function, persistence, that takes in a positive parameter 
// num and returns its multiplicative persistence, which is the number 
// of times you must multiply the digits in num until you reach a single digit.


const persistence = num => {
    let counter = 0;
    while(num > 9) {
      let str = num.toString().split('')
      let total = str.reduce((acc, current) => {
        return acc * current
        },1)
      num = total
      counter++
    }
    return counter;
   }
  
   persistence(num)
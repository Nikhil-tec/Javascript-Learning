// String and number comparison

console.log("0" == 0); // T
console.log("2" === 0); // F
console.log("2" > 0);  // F
console.log("2" >= 0);  // T
console.log("2" < 0); // F
console.log("2" <= 0); // T
console.log(+"2")

console.log("<----------------- Null vs 0 ------------->")

console.log(null>0) // f
console.log(null<0) // f
console.log(null == 0)  // f
console.log(null <= 0)  //t null ki value 0 ho gyi
console.log(null >= 0) // t

console.log("<----------------- Undefuned vs 0 ------------->")

console.log(undefined>0) //f
console.log(undefined<0) //f
console.log(undefined == 0) //f
console.log(undefined <= 0) //f
console.log(undefined >= 0) //f

console.log("<----------------- Undefuned vs Null ------------->")

console.log(null>undefined) //f
console.log(null<undefined) //f
console.log(null == undefined) //t
console.log(null <= undefined) //f
console.log(null >= undefined) //f

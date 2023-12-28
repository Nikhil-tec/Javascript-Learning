const skey = Symbol("key1");

const myObj = {
    [skey] : "Nik",
    name : "Nikhil",
    age  : 23,
    email : "nikhil@gmail.com"
}

myObj.greet = "Happy Birthdya";

const arr1 = [1, 2, 3, 4]
const arr2 = [5, 6, 7]

// console.log([...arr1, ...arr2])
// console.log([...arr1,...arr2,...[myObj]])

const [a1, a2, a3, a4] = [2,3,1,[1,2,3]];


// console.log(myObj);
// console.log(a4);

const newArr = arr1.splice(1,3);

// console.log(newArr);
// console.log(arr1);

const arr3 = arr2;

arr3.push(369);

console.log(arr2);
console.log(arr3);

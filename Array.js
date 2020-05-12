let fruits = ['mango', 'watermelon', 'banana'];

console.log(fruits);

//accessing array elements with position
console.log(fruits[0]);

//override array elements
fruits[1] = "kiwi";
console.log(fruits);

let ages = [20,30,40,50];

let random = ['vineela', 24, 'Mango', 3.14]
console.log(random);

//length of array
console.log(random.length);

//array methods
let res = fruits.join(',');
console.log(res);

//get position of array item
let pos = fruits.indexOf('mango');
console.log(pos);

//concat two arrays
let newArray = fruits.concat(ages);
console.log(newArray);

//push a new value to array. Returns the length of new array
newArray = newArray.push('hello');
console.log(newArray);

//pop removes the last value of array
res = fruits.pop();
console.log(res);




//strings
console.log('string');

let email = 'vineelagude.iiitn@gmail.com';
console.log(email);

//string concatination
let firstName = 'Vineela';
let lastName = 'Gude';

//concat first name and last name  -- won't give space between first name and last name
let FullName = firstName + lastName;
console.log(FullName);

//concat with space between fist name and last name
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters in a string
console.log(firstName[0]);

//string length
console.log(firstName.length);

//string methods

/*function is a snippet of code that performs a specefic task.
Method is a type of function that is associated with a particular method or datatype
length is a function
toUpperCase() is a method*/

console.log(fullName.toUpperCase());

let lowerFullName = fullName.toLocaleLowerCase();
console.log(lowerFullName);

//finding char position
let pos = email.indexOf("n");
console.log(pos);

let lastIndex = email.lastIndexOf("a");  //gives the position of last a in the string
console.log(lastName);

//slicing
let sliceResult = email.slice(0,3); //slices from 0 to 2. Excludes 3rd char
console.log(sliceResult);

//substring
let subStr = email.substring(2,10);  //starting fromm 2nd char, gives 10 chars as sub string
console.log(subStr);

//replace
let replacedString = email.replace('a', 'w'); //replaces first a with w
console.log(replacedString);




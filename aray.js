//methos 1 creating 
let a = ['hi','hello'];
console.log(a);

//method 2 

let b = [];

b[0] = 'hi';
b[1] = 'hello';

console.log(b);


//method 3 : 

let c =new Array('hitesh','aruna','hie');
console.log(c);


//push,pop,shift,unshift,length,indexof,lastindexof

//push - adds value at the last position only

c.push('hit');
console.log(c);

//pop : remove us to value from last position

c.pop();
console.log(c);

//shift : remove from the first position and unshift adds on time first position

c.shift();
console.log(c);


c.Unshift('hitt');
console.log(c);

//length : calculate the full length of array

console.log(c.length);


//indexof, LastIndexof, join,reverse,sort,slice,splice

let num1 = [1,2,3,4,4,5,5];
let num2 = [6,7,8,9,10];
console.log(num1.indexof(3));
console.log(num1.lastIndexof(5));

console.log(num1.concat(num2));

//concat : it does not  changes the original array 

//reverse


console.log(num1.reverse());

//sort

let num3 = [5,6,7,3,4,5,6];
console.log(num3.sort());//arrange the captitals ltters and to small letters 

//using sort followed by reverse gives a values arranged in descnding order

//slice, slice

num3.splice(2,1);//first digit to index position and second digit to remove the values, next digits are added the index position
console.log(num3);

//slice starting index is inclusive nd end index is exclusive not included

num3.slice(2,6);
console.log(num3);


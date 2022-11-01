/*
Falsy
false (jokon boolean false lekha hoi)
0
empty
undefined
null
NaN

---------------____---------
Truthy
true  (jokon boolean true lekha hoi)
any number (positive or negative)
any string (including single whitespace)
[]
{}
 */

// const x = '';
// let x;
// console.log('value of x', x)
// let x = null;
// let x = parseInt('hello');
// let x = [];
let x = {};

console.log(x);
if(x){
    console.log('variable is truthy')
}
else{
    console.log('variable is Falsy');
}

/*
data type
primitive
1/number
2.string
3.boolean
4.undefined
5.null
6.symbol
non-primitive
7.object
 */

let x = 'hello';
let y = x;
x = 'gello';
// console.log(x, y)

const a = {job:'web developer'};
const b = a;
// console.log(a, b);
b.job = 'Front end developer';
console.log(a, b)
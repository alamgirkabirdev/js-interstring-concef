/*
1. variable value not assigned
2. function but did not write return 
3.just wrote return but did not write return anything
4. parameter that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range
7. accessing deleted array element
8. explicitly  set value to undefined

*/
// let first;  //variable value not assigned
// // console.log(first);

// function second(x,y){
//     const sum = x=y;
//     //function but did not write return anything
// }
// const result = second(3,91);
// // console.log(result);

// function add(){
//     // const sum = a + b;
//     // return;
//     if( b < 10){
//         return;  //just wrote return but did not write return anything
//     }
//     const fun = a*b;
//     return sum;
// }
// const fourth =add(2, 7);
// // console.log(fourth);

// function double(a, b){
//     const result = a * b;
//     // console.log(b);
//     return result;
// }
// double(81); // b parameter that isn't passed.

const fifth = {name: 'sogir', age: 39, location:'bandarbon'};
// console.log(fifth.phone);  // property that doesn't exist in an object


const sixth =[ 45, 26,50, 92];
// console.log(sixth[5]);  // accessing array element out of range
delete sixth[2]; 
// console.log(sixth[2]);   //  accessing deleted array element.

const seventh = undefined;  
// console.log(seventh); // explicitly  set value to undefined.

const myObj = {name: 'samad', profession: null}


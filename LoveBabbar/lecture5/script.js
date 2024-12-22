const { CloudWatchLogs } = require("aws-sdk");

console.log("Radhey Radhey");
// function sayMYName(){
//     console.log("Kunal Gupta");
// }
// sayMYName();


// function print(){
//     for(let i=1;i<=100;i++){
//         console.log(i);
 
//    }
// }
// print();



// function printNumber(num){
//     console.log("Printing Number: ",num);
// }
// printNumber(1000);


// function getAverage(num1 , num2){
//     let average = (num1 + num2) / 2;
//     console.log(average);
// }
// getAverage(3,70);

/*
* return Function
*/

// function getSum(a,b,c){
//     return a+b+c;
// }
// let sum = getSum(2,3,5);
// console.log(sum);


// function getMyName(firstName , LastName){
//     return firstName + " " + LastName;
// }
// console.log(getMyName("Kunal","Gupta"));

// let multi = function(a,b){
//     return a*b;
// }
// console.log(multi(5,6));


// const squareNumber = function(a){
//     return a*a;
// }
// console.log(squareNumber(5));

let  getExp = (x,y) => { 
    let ans = x**y;
    return ans;
}

console.log(getExp(4,5));
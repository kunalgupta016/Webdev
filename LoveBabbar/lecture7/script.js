console.log("Radhey Radhey");

// Function Hoisting
// sayMyName("Kunal");
// function sayMyName(FirstName){
//     console.log("My name is " + FirstName);
// }

// Variable Hoisting
// console.log(age);  
// var age = 25;


// ? Function in variable
// let greet = function(){
//     console.log("jai shree Ram");
// }
// greet();


// ? function in function
// function greetme(greet,fullname){
//     console.log("Hello",fullname);
//     greet();
// }
// function greet(){
//     console.log("Heelo");
// }
// greetme(greet,"Kunal");

// ? return me function
// function slve(num){
//     return function(num){
//         return num * num;
//     }
// }
// let ans = slve(5);
// console.log(ans(10));

// ? data structure me function
// const arr = [
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     },
//     function(a,b){
//         return a/b;
//     },
// ]
// let first = arr[3];
// let ans = first(4,5);
// console.log(ans);


// ? object me function
let obj = { 
    age:18,
    name:"kunal",
    greet:function(){
        console.log("Hello",this.name);
    }
}

obj.greet();
console.log(obj.name);
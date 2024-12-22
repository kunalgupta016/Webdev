console.log("Radhey Radhey");

// let obj={
//     "name" : "Kunal",
//     "age" : 18,
//     "weight" : 67,
//     greet : function(){
//         console.log("Hello Jee kaise Ho ");
//     }
// };

// for(let key in obj){
//     console.log(key,obj[key]);
// }

// console.log(obj);
// obj.greet();


// console.log(typeof(obj));
// ?Shallow Copy
// let obj2 = obj;
// console.log(obj2);


// let arr = [1,"Kunal",greet = function(){
//     console.log("Hello Jee");
// }];
// console.log(arr);


// let brr = new Array('Kunal',1,true);
// console.log(brr);

// console.log(typeof(brr));
// console.log(typeof(arr));
// console.log(arr[0]);
// console.log(brr[1]);


// let arr = [1];
// arr.push("Kunal");
// arr.push(true);
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.length);
// arr.shift();
// console.log(arr);
// arr.unshift("Kunal");
// arr.push(20);
// arr.push(40);
// arr.push(70);
// arr.push("Kunal");
// console.log(arr.slice(2,4));
// arr.splice(1,0,"Kunal");

// console.log(arr);



// let arr = [20,30,40];
// let ans = arr.map((number)=>{
//     return number*number;
// })
// console.log(ans);


// let arr = [10,20,30];
// arr.map((number,index)=>{
//     console.log(number);
//     console.log(index);
// })

// ?Filter
// let arr = [1,2,3,4,5];
// let evenArray = arr.filter((number)=>{
//     return number%2==0;
//     // if(number%2===0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
// })
// console.log(evenArray);


// let arr = [1,2,'Kunal','Love',true];
// let ans = arr.filter((value)=>{
//     if(typeof(value)==='number'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(ans);


// let arr = [10,20,30,4,5,6];
// let ans = arr.reduce((acc,crr)=>{
//     return acc+crr;
// },0);
// console.log(ans);


// let arr = [20,4,3,1,8,0,2,10];
// arr.sort();
// console.log(arr);

// let arr = [1,2,3,45,6];
// console.log(arr.indexOf(6));



// let arr = [10,20,30];
// arr.forEach((number,index)=>{
//     console.log("Number: ",number , "Index",index);
// });

// for(let index=0;index<arr.length;index++){
//     console.log(arr[index]);
// }

// for(let value of arr){
//     console.log(value);
// }

// let FirstName = "Kunal"
// for(let val of FirstName){
//     console.log(val);
// }


let arr = [1,23,4,5];
function getSum(arr){
    let sum = 0;
    arr.forEach((val) => {
        sum +=val;
    });
    return sum;
}
let totalSum  = getSum(arr);
console.log(totalSum);



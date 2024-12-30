console.log("Radhey Radhey");
// OBJECT CLONING
// OBJECTS ARE DYNAMIC IN NATURE
/*
let obj = {
    age:18,
    wt:68,
    ht:164
};

console.log(obj);
console.log("AFTER INSERTING DYNAMICALLY ");
obj.color = "WHITE";
console.log(obj);

*/

// OBJECT CLONING WAYS
// ! 1. USING SPREAD OPERATOR
// let src = {
//     age:18,
//     wt:68,
//     ht:164
// };

// let clone = {...src};
// src.age = 12;
// console.log("src: " , src);
// console.log("clone: " , clone);


// ! 2. Using ASSIGN OPERATOR

// let src = {
//     age:18,
//     wt:68,
//     ht:164
// };

// let src2 = {
//     Name: "Kunal",
//     Gender: 'M'
// };

// let clone = Object.assign({},src,src2);
// src.age = 12;
// console.log("src: " , src);
// console.log("clone: " , clone);



// let src = {
//         age:18,
//         wt:68,
//         ht:164
// };

// let des = {};
// for(let key in src){
//     let newKey = key;
//     let newValue = src[key];
//     des[newKey] = newValue;
// };


// src.age = 12;
// console.log(des);


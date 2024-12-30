console.log("Radhey Radhey");

// ! Default Parameters 
// function sayName(fname = "Nitish" , lname = "Singh"){
//     console.log(fname + " " + lname);
// }
// sayName("Kunal");
// sayName();

// function sayName(fname = "Nitish" , lname = fname.toUpperCase()){
//     console.log(fname + " " + lname);
// }
// sayName("Kunal");
// sayName();

// function solve(val = {age:12 , wt:34 , ht:190}){
//     console.log("hello jee",val);
// }
// solve();

// function solve1(val = [1,2,4,"kunal",true]){
//     console.log("hello jee",val);
// }
// solve1();

// function solve3(val = "Kunal"){
//     console.log("hello jee",val);
// }
// solve3(null);
// solve3(undefined);

// function getAge(){
//     return 190;
// }
// function utility(name = 13,age = getAge()){
//     console.log(name , " " ,age);
// }
// utility();




// !   CLASSES
// class Human{
//?      Properties
//     age;
//     #height = 14; // private
//     weight = 134;

//?      Behaviour

//     constructor(newage,newweight,newHeight){
//         this.age = newage;
//         this.weight = newweight;
//         this.#height = newHeight;
//     }

//     walking(){

//         console.log("Walking",this.#height);
//     }
//     running(){
//         console.log("Running");
//     }
//     get fetchHeight(){
//         return this.#height;
//     }
//     set modifyheight(val){
//         this.#height = val;
//     }
// }

// let obj = new Human(15,180,12);
// console.log(obj.age); // Output: 15
// console.log(obj.weight); // Output: 180
// console.log(obj.fetchHeight);
// obj.walking();



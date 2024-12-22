console.log("Radhey Radhey");
// complie time error

// Syntax error
// console.log 1;


// RUN TIME ERROR
 
// Reference Error
// console.log(x);


// try{
//     console.log("Try bloack starts here");
//     console.log(x);
//     console.log("Try block ends here");
// }

// catch(e){
//     // define errror ke saath ya karna chhahte hai 
//     // retry logic // falll back machanism    // logging  // custome eroror
//     console.log("I am in  catch block");
//     console.log("Your error here-> \n",e);

// }
// finally{
//     console.log("I WILL RUN EVERYTIME AS I AM FINALLY BLOCK");
// }



// ! CREATE CUSTOM ERROR 

// try{
//     console.log(x);

// }
// catch(e){
//     throw new Error("BHAI PHLE DECLARE TO KAR LO ");
// }


let errorCode = 100;
if(errorCode == 100){
    throw new Error("INVALID JSON");
}
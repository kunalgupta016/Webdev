console.log("Radhey Radhey");

// let firstpromise = new Promise( (resolve,reject) =>{
//     console.log("First");
    // resolve(1001);
    // reject(new Error("Internal Server Error "));

// } ) 


/*
let secondPromise = new Promise((resolve , reject)=>{
    function say(){
        console.log("Jai Shree Ram");
    }
    
    setTimeout(say,1110);
})
*/



/*

let secondPromise = new Promise((resolve , reject)=>{
    
    let success =1;
    if(success){
        resolve("Promise Fulfilled");
    }
    else{
        reject("Promise Rejected");
    }
    

})

secondPromise.then((message)=>{
    console.log("Then ka message : " , message);
}).catch((message)=>{
    console.log("Error : ", message);
})
*/





/*
secondPromise.then((message)=>{
    console.log(" First message " , message);
    return "Promise Fulfilled Second message";
}).then((message)=>{
    console.log("Second message " , message);
    return "Promise fulfiileed Third Message";
}).then((message)=>{
    console.log("Third message " , message);
}).catch((error)=>{
    console.log(error);
}).finally((message)=>{
    console.log("Finally ka message :  MAI TO FINALLY HU MAI TO CHALUNGA");
});
*/






/*

secondPromise.catch((message)=>{
    console.log(" First message " , message);
    return "Promise Rejected Second message"; // Error
}).catch((message)=>{  
    console.log("Second message " , message);
    return "Promise Rejected Third Message";
}).catch((message)=>{
    console.log("Third message " , message);
})
*/

/*


let Promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First");
});

let Promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second");
});
let Promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,4000,"Third");
});


Promise.all([Promise1,Promise2,Promise3])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log("Error: " + error );
})
*/
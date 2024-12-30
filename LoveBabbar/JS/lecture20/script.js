console.log("Radhey Radhey");

function outerFunction(){
    let  name = "Kunal";
    function innerFunction(){
        console.log(name);
    }
    return innerFunction;
    
}

let inner = outerFunction();
inner();  // ye ab bhi call ho jayega kyonki inner name ke saath
//  bind ho chuka hai 
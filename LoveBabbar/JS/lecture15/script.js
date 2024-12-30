
// function changeText(event){
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Kunal";
// }

// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click',changeText); 
// //! fpara = event-target
// //! Click = Event
// //! changeing Text = Action aur kha se ho rha hia eventListener se


// fpara.removeEventListener('click',changeText);

let anchorElement = document.getElementById('Fanchor');


function defaultw(e){
    e.preventDefault(); //! isse default remove ho jayega
    anchorElement.textContent = "CLICK DONE";
}

anchorElement.addEventListener('click',defaultw);

let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let img3 = document.querySelector('#img3');
let img4 = document.querySelector('#img4');
let Rotate = document.querySelector('#btn');
function rotatekaro(){
    // console.log("CLICK");
    // e.preventDefault();
    img4.style.cssText = "transform: translate(-50%,-50%) rotate(-50deg);"
    rotatekaro();
}
Rotate.addEventListener('click',rotatekaro);

let changeTheme = document.querySelector('#sun');
let main  = document.querySelector('#main');

function change(){

   if(main.style.cssText == 'white'){
        main.style.cssText = 'background-color: black; , color:white;';
        changeTheme.innerHTML = '<button id="sun"><i class="ri-moon-line"></i></button>';
   }
   else if(main.style.cssText == 'black'){
    main.style.cssText = 'background-color: white; , color:black;';
    changeTheme.innerHTML = '<button id="sun"><i class="ri-sun-line"></i></button>';
   }
    

} 

changeTheme.addEventListener('click',change);



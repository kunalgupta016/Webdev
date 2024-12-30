// console.log("Radhey Radhey");
// // code 1 for add 100 para 

// const t1 = performance.now();

// for(let i = 0 ; i<100 ; i++){
//     let para = document.createElement('p');
//     para.textContent = " This is para "+ (i+1);
//     document.body.appendChild(para);
// }

// const t2 = performance.now();
// console.log("Performance time by code 1 is " + (t2-t1));

// // code 2 for add 100 para using fragment


// const t3 = performance.now();

// let mydiv = document.createElement('div');

// for(let i = 1; i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent = " This is para "+ i;
//     mydiv.appendChild(para);
// }

// document.body.appendChild(mydiv);
// const t4 = performance.now();
// console.log("Performance time by code 2 is "+ (t4-t3));



//  !best code
// const t5 = performance.now();

// let fragment = document.createDocumentFragment();

// for(let i=1;i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent = " This is para "+ i;
//     // NO REFLOW NO REPAINT
//     fragment.appendChild(para);
// }

// document.body.appendChild(fragment);

// const t6 = performance.now();

// console.log("Performance time by best code is "+ (t6-t5));

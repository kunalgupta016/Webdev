console.log("Radhey Radhey");
/*

async function getData() {
    setTimeout(function(){
        console.log("I am inside setTimeOut block");
    },3000);
}

getData();
*/

// await

// fetch API padh leni chhahiye 

/*
async function getData() {
    
    // get request -> async
    let response  =  await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    // parse
    let data = await response.json();
    console.log(data);


}
getData();
*/


// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const url = 'https://jsonplaceholder.typicode.com/posts';

// const options = {
//     method: "POST",
//     headers: myHeaders,
//     body: JSON.stringify({username:"Kunal Gupta"}),
// };



// async function getData(){
//     const url = 'https://dummyjson.com/posts/user/252';
//     const response = await fetch(url);
//     let data = await response.json();
//     console.log(" Get Data Response : ",data);
// };

// async function postData(){

//     const response  = await fetch('https://dummyjson.com/posts/add', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           title: 'I am Kunal and I am in love with someone.',
//           userId: 5,
//           /* other post data */
//         })
//       })
//     // const response = await fetch(url,options);
//     let data = await response.json();
//     console.log("Post Data: ",data);
// };

// async function Process(){
//     await postData();
//     await getData();
// }
// Process();


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

async function getData(userId) {
    const url = `https://jsonplaceholder.typicode.com/posts/${userId}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("Get Data Response: ", data);
}

async function postData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: 'I am Kunal and I am in love with someone.',
            userId: 5, // User ID for whom the post is being added
            /* other post data */
        }),
    });

    const data = await response.json();
    console.log("Post Data Response: ", data);
    return data.userId; // Return the user ID to fetch relevant posts
}

async function Process() {
    const userId = await postData(); // Post data and get the user ID
    await getData(userId); // Fetch data for the specific user
}

Process();






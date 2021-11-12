let p=new Promise((resolve,reject)=>{
    let a=2+2;
    if(a==4){
        resolve("success")
    }else{
        reject("failer")
    }
})
p.then((message)=>{
    console.log("this is the then",message);
}).then((mess)=>{
    console.log(mess);
}).catch((message)=>{
    console.log("this is in the catch",message );
})


// -----------------------callbacks---------------------------------

let posts=[
    {title:"post one",body:"this is the post one"},
    {title:"post two",body:"this is the post two"},
]

// function getPost(){
//     setTimeout(() => {
//         let output=""
//         posts.forEach((post,index)=>{
//             output=output + " "+ post.title;
//         })
//         console.log(output)
//     }, 2000);
// }

// function createPost(post,callback){
// setTimeout(() => {
//     alert("hi there")
//     posts.push(post)
//     callback()
// }, 8000);
// }

// createPost({title:"post three",body:"this is post three"},getPost);
// console.log("hi")

// callback function is a function which is passed to another function as an argument
//its used for the asynchronous operation that is we dont have to wait for code to complete its operation


function enrollPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        console.log("enrolled");
        callback()
    }, 0000);
}
function gettingPost(){
    setTimeout(() => {
        let str="";
        posts.forEach((post,index)=>{
            str=str + " "+ post.title;
        })
        console.log(str)
    }, 5000);
}

let newPost={title:"4", body:"nnn"}
enrollPost(newPost,gettingPost)
// gettingPost();
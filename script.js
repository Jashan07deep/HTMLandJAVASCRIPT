const button=document.querySelector('button')
// const button2=document.querySelector('#bttt')
// button.classList.add('btn')

// function message(){
//     alert("Peak")

// }
// button.addEventListener('click',message)



// button2.addEventListener('click',function(){
//     button.removeEventListener('click',message)
// })
// button.addEventListener('keydown',function(event){
//     console.log(event.key)
// })
// button.addEventListener('keyup',function(event){
//     console.log(event.key)
// })
 
// Asynchronous example

// console.log("First line")
// setTimeout(()=>{
//     console.log("After 2 sec")
// },2000)
// console.log("Second line")


// timeout function

// setTimeout(()=>{
//     alert("Alert after 3 sec")
// },3000)


// set interval

// const timerID=setInterval(()=>{
//     console.log("Hello world")
// },1000)

// to stop time interval

// setTimeout(()=>{
//     clearInterval(timerID)
// },10000)

// problem statement

// let count=1;

// const id=setInterval(()=>{
//     if(count==10)clearInterval(id)
//     console.log(count)
//     count+=1
// },1000)


// callback fn
// function print(name) {
//     console.log("Hello Students",name)

// }

// higher order fn
// function greet(num){
//     console.log("Welcome to class")
//     setTimeout(()=> {
//         console.log("Inside setTimeout")
//         let FirstName="Alex"
//         num(FirstName)

//     },2000);
// }

// greet (print)

// Callback hell

// console.log("Starting homework");

// setTimeout(()=>{
//     console.log("Homework done");
//     console.log("Starting dinner")

//     setTimeout(()=> {
//         console.log("Dinner done");
//         console.log("Getting ready to go out");

//         setTimeout(()=>{
//             console.log("Going to the playground");
//         },1000)
//     },1500)
// },2000)


// To face callback hell

function finishhomework(callback) {
    console.log("Starting Homework")
    setTimeout(()=>{
        console.log("Homework done");
        callback();
    },2000)
}
function eatdinner(callback){
    console.log("Starting Dinner")
    setTimeout(()=>{
        console.log("Dinner done");
        callback();
    },1500);
}
function goToPlayground(){
    console.log("Going to the playground");
}

finishhomework(()=>{
    eatdinner(()=>{
        goToPlayground();
    })
})
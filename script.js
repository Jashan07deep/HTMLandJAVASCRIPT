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

let count=1;

const id=setInterval(()=>{
    if(count==10)clearInterval(id)
    console.log(count)
    count+=1
},1000)

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

console.log("First line")
setTimeout(()=>{
    console.log("After 2 sec")
},2000)
console.log("Second line")

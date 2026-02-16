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

// function finishhomework(callback) {
//     console.log("Starting Homework")
//     setTimeout(()=>{
//         console.log("Homework done");
//         callback();
//     },2000)
// }
// function eatdinner(callback){
//     console.log("Starting Dinner")
//     setTimeout(()=>{
//         console.log("Dinner done");
//         callback();
//     },1500);
// }
// function goToPlayground(){
//     console.log("Going to the playground");
// }

// finishhomework(()=>{
//     eatdinner(()=>{
//         goToPlayground();
//     })
// })

// Promie statement

// const p=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let done=true;
//         if(done){
//             resolve({name:"Alex",age:34})
//         }else{
//             reject("Network issue")
//         }
//     },5000)
// })
// p.then((data)=>{
//     console.log("Resolved",data)
// }).catch((err)=>{
//     console.log("Rejected",err)
// }).finally(()=>{
//     console.log("Finally block")
// })

// function doHomework(){
//     const p=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Homework is done")
//                 resolve("Homework complete")
//             }else{
//                 reject("Homework is not done")
//             }
//         },5000)
//     })
//     return p
// }

// function eatDinner(){
//     const p=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Eating Dinner")
//                 resolve("Dinner complete")
//             }else{
//                 reject("Dinner is not done")
//             }
//         },5000)
//     })
//     return p
// }

// function goToPlayground(){
//     const p=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Went to playground")
//                 resolve("Playground Time")
//             }else{
//                 reject("Go to sleep")
//             }
//         },5000)
//     })
//     return p
// }

// doHomework().then((data)=>{
//     console.log(data)
//     return eatDinner()
// }).then((data)=>{
//     console.log(data)
//     return goToPlayground()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Go to Sleep")
// })


// console.log ("First line")
// setTimeout(()=>{
//     console.log("Inside Timeout")
// },0)
// const p=new Promise((resolve,reject)=>{
//     resolve()
// })

// p.then(()=>{
//     console.log("Inside Promise")
// }).catch(()=>{
//     console.log("Inside catch")
// })
// const p2=new Promise((resolve,reject)=>{
//     resolve()
// })

// p2.then(()=>{
//     console.log("Inside Promise")
// }).catch(()=>{
//     console.log("Inside catch")
// })
// const p3=new Promise((resolve,reject)=>{
//     resolve()
// })

// p3.then(()=>{
//     console.log("Inside Promise")
// }).catch(()=>{
//     console.log("Inside catch")
// })

// console.log("last line")

function orderfood(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Food ordered")
            resolve("Food ordered")
        },1000)
    })
}

function preparefood(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Food Prepared")
            resolve("Food Prepared")
        },1000)
    })
}
function Deliverfood(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Food Delivered")
            resolve("Food Delivered")
        },1000)
    })
}

async function order(){
    const data=await orderfood()
    console.log(data)
    await preparefood
    await Deliverfood
}

order()

// orderfood().then((data)=>{
//     console.log(data)
// }).then((data)=>{
//     console.log(data)
//     return Deliverfood()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })
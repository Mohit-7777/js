const promiseOne = new Promise(function(res, rej){
    //Do an Async Task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed");
        res();
        
    }, 1000)
})
promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

new Promise((res, rej)=>{
    setTimeout(()=>{
        res();
        console.log("Async Task 2");
        
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise((res, rej)=>{
    setTimeout(function(){
            res({username:"Promise",
                email : "promise@example.com"
            })
    },1000)
})

promiseThree.then((data)=>{
    console.log(data);
    
})

const promiseFour = new Promise(function(res, rej){
        setTimeout(function(){
            let error = true
            if(!error){
                res({username:"Mohit", password:"123"})
            }
            else{
                rej('ERROR')
            }
        },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
    
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"JavaScript", password:"123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive() {
   try{
    const response = await promiseFive
    console.log(response);
    
   } catch(error){
    console.log(error);
    
   }
}
consumePromiseFive()
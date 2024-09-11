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
        console.log("Async Task 2");
        
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})
//Summary

//Immediately Invoked Function Expression   (IIFE)
//(method_declaration)(method calling);     Semicolon for termination
// Named function = Named IIFE
//Non-named function = Non-Named IIFE





// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){                       // Named Function   or  Named IIFE
    console.log(`DB CONNECTED`);            
})();                                   //Semi colon is mandetory when using IIFE cuz it doesn't know where to stop


((name) => {                                        //UnNamed Function or Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);        // 
})("Mohit");
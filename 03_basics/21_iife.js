// Immediately Invoked Function Expression (IIFE)


(function chai() {
    // named iife
    console.log(`chai peloo`);
}) (); // here expected secolon (;) use

((num) => {
    // unnamed iife
    console.log(`chai ${num}`);
}) (2);

(() => {
    console.log(`chai hai`);
}) ()

 

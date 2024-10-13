//setTimeout(p1,p2) // setTimeout() is a function that is used to call a function after a specified amount of time.


// setTimeout(work, 5000)


// sync => synchronous


console.log("A")


setTimeout(()=>{
    for(let i=0; i<10000000000; i++){

    }
    console.log("Loop ended")
}, 5000)

console.log("B")


console.log("C")
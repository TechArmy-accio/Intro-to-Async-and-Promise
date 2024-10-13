
// console.log("A")

// function greet(name, age){
//     console.log("Good Morning", name, age)
// }

// setTimeout(greet,2000, "John", 20)




// let setTimeoutId = setTimeout(()=>{
//     console.log("We saw that u r inactive for last 5 sec, r u looking for somethinf specific?")
// },5000)


// clearTimeout(setTimeoutId)


// console.log(setTimeoutId, typeof setTimeoutId)



// settimeoutId 

// in browser environment => Number 

// in nodejs environment => Object



function timer(n){

    if(n===0){
        console.log("Time's up")
        return
    }


     console.log(n)
     setTimeout(()=>{timer(n-1)}, 1000)

}


timer(5)
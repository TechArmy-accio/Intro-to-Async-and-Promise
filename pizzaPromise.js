// step 1: Call dominos => {seelction} => 2 sec

// step 2: Prepare pizza => {Farm House} => 5 sec

// step 3: toppings ready => {Tomato} => 2 sec

// step 4: drinks ready => {Pepsi} => 1 sec

// step 5: sides ready => {Garlic Bread} => 3 sec

// step 6: Deliver => 2 sec

// step 7: Eat the pizza => 5 sec



let isPizzaShopOpen = true;
let stock = 0


function orderPizza(work, time) {
    // work = ()=>{console.log("Ordper Placed")}
    // time = 2000

    return new Promise((resolve, reject)=>{
        

        if(isPizzaShopOpen == true && stock> 0){

            setTimeout(()=>{resolve(work())}, time)
            
        }

        else if(isPizzaShopOpen == false){
            reject("Pizza Shop is Closed")
        }
        
        else if(stock == 0){
            reject("Pizza is Out of Stock")
        }
    })
    // return promise1
}


// let  p1 = orderPizza(()=>{console.log("Call Dominos")}, 2000)
// p1.then()
// p1.catch()

orderPizza(()=>{console.log("Order Placed")}, 2000)
.then(()=>  orderPizza(()=>{console.log("Pizza is being prepared")}, 
5000)) 

.then(()=> orderPizza(()=>{console.log("Toppings ready")}, 2000))

.then(()=>orderPizza(()=>{console.log("drinks ready")}, 1000) )

.then(()=>orderPizza(()=>{console.log("sides ready")}, 3000))

.then(()=>orderPizza(()=>{console.log("Deliver")}, 2000))

.then(()=>orderPizza(()=>{console.log("Eat the Pizza")}, 5000))

.catch((err)=>console.log("failed: ", err))

.finally(()=> console.log("Piiza shop is closed now") )

































// str.split()
// .reverse()
// .join()


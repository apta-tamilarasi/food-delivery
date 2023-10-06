let cusname=prompt("Enter your name")
let food=prompt("Enter your food name")

    
let order=(a,b)=>{

   
    ordermsg(cusname,food)

    setTimeout(()=>{
       
         document.write(`${b}hubs prepares the ${b} and it's ready after a while<br><br>`)

         setTimeout(()=>{
            document.write(`${a} your ${b} is on the way....`)
   
             setTimeout(()=>{
                    alert("Successfully, Your Order is at your Door step")
             },1000)
   
       },10000)

    },5000)
   
   
   
    
}

let ordermsg=(cusname,food)=>{
    
    setTimeout(function(){

        document.write(`${cusname}  orders the ${food}<br><br>`)
    
         document.write(`your order is Booked<br><br>`)

    },1000)
   
}


 order(cusname,food)



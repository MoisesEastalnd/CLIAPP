var mysql = require("mysql");
function displayProduct(){
    inquirer 
    .prompt([
        {
            id:"001",
            name:"coffee table",
            price:"200.00"
        },{
            id:"",
            name:"",
            price:""
        },{
            id:"",
            name:"",
            price:""
        },{
            id:"",
            name:"",
            price:""
        },{
            id:"",
            name:"",
            price:""
        },{
            id:"",
            name:"",
            price:""
        },{
            id:"",
            name:"",
            price:""
        },{
            id:"",
            name:"",
            price:""
        },{
            id:"",
            name:"",
            price:""
        },{
            id:"",
            name:"",
            price:""
        },
        {
            message:"What is the ID number of the item you would like to purchase?",
            userchoice:["purchase,","Skip"],
            message:"How many units would like to purchase?",
            quantity:[""]
        }

        .then(function(invortory){
            if(answer.item === "purchase") {
                i-= quantity
            }
        })

        // insufficeint quantity message 

        //replenishment function 

        //mysql quantity reflection function
        
        //customer cart and final purchase function
           
       
    ])
}


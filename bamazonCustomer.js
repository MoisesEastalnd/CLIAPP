var mysql = require("mysql");
function displayProduct(){
    inquirer 
    .prompt([
        {
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
        },{
            id:"",
            name:"",
            price:""
        },
        {
            message:"What is the ID number of the item you would like to purchase?",
            message:"How many units would like to purchase?",
        }
           function invertory(){
               if displayProduct < 0 {
                   return quantity -1
               }
           }
    
       
    ])
}


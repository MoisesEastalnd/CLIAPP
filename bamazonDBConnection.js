const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});

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
    
       
    ])
}
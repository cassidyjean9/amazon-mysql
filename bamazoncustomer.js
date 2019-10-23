var inquirer = require("inquirer");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Catsrule6363!",
    database: "bamazon"
  });

  connection.connect(function(err) {
      if (err) throw err;
      start();
  });

  function start() {
    connection.query("SELECT * FROM products", function(err, results) {
       console.log(results); 

       inquirer.prompt([
           {
            name: "choice",
            type: "rawlist",
            choices: function() {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].product_name);
              }
              return choiceArray;
            },
               message: "What is the ID of the product you would like to buy?"
           },
           {
               name: "quantity",
               type: "input",
               message: "How many would you like to buy?"
           }
       ]).then(function(answer) {
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.choice) {
            chosenItem = results[i];
          }
        }
        console.log(chosenItem.stock_quantity);

        if(chosenItem.stock_quantity > parseInt(answer.quantity)) {
            var price = answer.quantity * chosenItem.price;
            var newQuantity = chosenItem.stock_quantity - answer.quantity;
            
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: newQuantity
                    },
                    {
                        item_id: chosenItem.item_id
                    }
                ],
                function(error) {
                    if (error) throw error;
                    console.log("Your order total is " + price);
                   
                }
            );
        }
        if (chosenItem.stock_quantity < parseInt(answer.quantity)) {
            console.log("Cannot fill order, insiffient quantity.")
        }
       })

    });

}
  
  

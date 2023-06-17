/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  // LOGIC - we can add the price of each category and return an array of objects having the object as category - amount
  // INPUT - an array of objects like below
  /* { 
      Name:"Joshua",
      Category:"Skirt",
      price: 599,
      timestamp: 4:50
      },
      {
      Name:"yunyun",
      Category:"satin shirt",
      price: 2,
      timestamp: 9:00
      } */
    // OUTPUT - should be something like this
    /* {
      {
        Skirt - 599;
      },
      {
        satin shirt - 2;
      }
    } */

    // STEPS -
      /* 1. We will create an object.
        2. We will run the for loop which will save the category and add prices to it (somehow)
      */

    console.log("current transactions", transactions, "----")

      var output = [];
      var isCreated = false;

        for(var i = 0; i < transactions.length; i++){
          isCreated = false;
          var currentCategory = transactions[i].category;
          var currentPrice = transactions[i].price;

          // if that category already exists, then we need to add
          // otherwise we need to push up that new catogory
          // what's the issue - the issue here is, that we can't actually access the totalSpent key for a certain category
          // ?????
          // { category = shirt, totalSpent = 30 } how can we add in this??? 
          // if output.category == shirt, output += totalSpent
          // else push
          // We are using a flag called isCreated
        if(i == 0)
          output.push({category: currentCategory,totalSpent: currentPrice});

        for(var j = 0; j <= output.length; j++){
          if (output[j].category != null && output[j].category == currentCategory){
            output[j].totalSpent += currentPrice;
            isCreated = true;
            break;
          }
        }

        if(isCreated == false)
          output.push({category: currentCategory,totalSpent: currentPrice});
      }

        console.log("this is the output", output, "IT ENDS WITH US");

  return output;
}

module.exports = calculateTotalSpentByCategory;

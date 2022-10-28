///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/



const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

 const summedPrice = cart.reduce((acc, curr) => {
    return acc + curr.price 
 }, 0)
 console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let finalNumber = cartTotal * (1 + tax)  - couponValue
    return console.log(finalNumber)
}

console.log(calcFinalPrice(summedPrice, 5, .06))
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
Things a restraunt needs for customer information:
name - you have to know who the order if for.
Price of items in cart - you need to know what to charge.
number of items in car- for reference to make sure the order is complete
Tip - most sit down places will have the tip option either on the card reader or  your recipt

Name is a 'string'
number of items = a number for total cart size
Price of items in cart = array of numbers
tip = a nother number representing the ammount tipped

*/

/*
    Now, create a customer object following your own
    guidelines.
*/



//CODE HERE
let customer = {
    name: 'Your Name Here',
    numItems: 'The number of items you ordered here.',
    cartPrices: 'Array of prices in the cart here',
    tip: 'the ammount you would like to tip here'
}
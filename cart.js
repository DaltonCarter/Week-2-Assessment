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


//Commentary: I am freaking baffled this should be working and instead it's returning [object],[object], and then two of the prices.
//we did this exact thing in a lab, with the solution set up LIKE THAT and it works fine, trouble shoot says it's not even IDENTIFYING the first
//price I don't know what to do here, this should be working.
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

 const summedPrice = cart.reduce((acc, cur) => {
    console.log(cur.price)
    return acc + cur.price 
 })
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
    let finalNumber = cartTotal + (cartTotal * tax) - couponValue
    return console.log(finalNumber)
}

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
subTotal - the sub total of whatever you ordered
Tip - most sit down places will have the tip option either on the card reader or  your recipt
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
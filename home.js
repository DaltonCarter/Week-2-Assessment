///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/


//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

//CODE HERE

const greetUser = (userName) => {
  return `Welcome back ${userName}`
}
console.log(greetUser('Dalton'))

//////////////////PROBLEM 2////////////////////
/* 
    Below is an array of zip codes that are in
    the restaurant's delivery zone. 

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not, 
    return a string letting them know that. 

    For example:
    canWeDeliver(84606) 
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205) 
        // `You're in our delivery zone!`
*/

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]

//CODE HERE

const canWeDeliver = (zipCode) => {
    for(i = 0; i < deliveryAreaZipCodes.length; i++){
        if(deliveryAreaZipCodes[i] === zipCode){
            return 'You are in our delivery zone!'
        }
        
    }
    return 'Sorry, we caannot deliver to that address.'
}
console.log(canWeDeliver(92378))


/* 
    Problem 2 Continued

    Now you're going to rewrite your function.

    If you wrote `canWeDeliver` using a loop of
    some kind, write a new function (`canWeDeliverTwo`)
    below, using the `includes` array method. 
    Look it up on MDN if you're not sure how to use 
    it. 

    If you already used the `includes` method, 
    write a new function using some sort of 
    loop (for loop, higher order array method).
    Name your new function `canWeDeliverTwo`.
*/

// CODE HERE

const canWeDeliverTwo = (zipCode) => {
    if(deliveryAreaZipCodes.includes(zipCode)){
        return 'You are in our delivery zone!'
    }
    return 'Sorry, we caannot deliver to that address.'
}

console.log(canWeDeliverTwo(85205))
//////////////////PROBLEM 3////////////////////
/* 
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently. 

    You are going to access the object's properties 
    and change some values. Don't edit the array 
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

///COMMENTARY: Apparently I missed something along the way, but no matter what material i looked up for this I COULD NOT
//Get this method to actually function the way it was supposed to, and i tried using .toString(), and chaining .split('').replace().join('')
//and it flew me the bird the whole way. SO using the info I had I put together something that would work as a proxy. this applies to BOTH
//of the following problems.



const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: '   This deal lasts until the end of March! '
    }
]

/*
    The owner has decided to take the 15% off
    deal down to 10%.

    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.
*/

//CODE HERE

// const newDiscount = (arr, str, str2) => {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i].title === str){
//             return arr[i].title = str2
            
//         }
//     }
// }


// newDiscount(deals, '15% Off!', '10% Off!')
// console.log(deals)


//ACTUAL BLOODY SOLUTION:

console.log(deals[0].title)
deals[0].title = deals[0].title.replace('15', '10')
console.log(deals[0].title)
/*
    The restaurant is going to continue its
    family deal for another month. 

    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.

    You should also make sure that there is no
    whitespace in this string, since it seems
    to be displaying wrong on the live site.
*/

//CODE HERE
// const newDesc = (arr, str, str2) => {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i].desc === str){
//             return arr[i].desc = str2.trim()
            
//         }
//     }
// }

// newDesc(deals, '   This deal lasts until the end of March! ', '   This deal lasts until the end of April! ' )
// console.log(deals)

//COMMENTARY: Thanks to the Syntax breakdown for above I fixed this one out before Kyle reviewed it.

deals[1].desc = deals[1].desc.replace('March', 'April').trim()
console.log(deals[1].desc)
// function addtwo(no1,no2)//parameters
// {
//     return no1+no2
// }
// const result= addtwo(4 , 5)//function calling by giving arguments if (4 ,"5")it will gave 45 cause its became a string
// console.log(result)
// function bitch(username){
//     if(username == undefined)
//     {
//         console.log("please enter a username");
//         return
//     }
//     return username
// }
// console.log(bitch("Hello"))
function calculate(...num1){//...rest operator will add every arguments
    return num1
}
console.log(calculate(2,3,4))
const user = {
    username: "sounak",
    price: 199
}
function objectshand (name)
{
    console.log(`username is ${name.username} and price is ${name.price}`)//passing object in function
}
objectshand(user)


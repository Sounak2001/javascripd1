//object literals
const mysym=Symbol("key1")
const jsUser={
    name: "sounak",
    "full name": "sounak pramanik",
    age: 22,
    [mysym]:"mykey1",
    location: "Kolkata",
    email:"sopunak@gmail.com",
    isLoggedIn:false,
    laslogginDays:["sunday","monday"]
}//creating obj
//console.log(jsUser["email"])
//console.log(jsUser.full name)//this is why we use square notation
//console.log(jsUser[mysym])//accessing a symbol and adding it into object key which is in jsUSer

//Object.freeze(jsUser)//it will freeze the value of jsuser
//jsUser.email="kutreya@123"
//console.log(jsUser["email"])//changing the value of jsUser//key if we dont use freezeuser
//console.log(jsUser)
jsUser.greeting = function(){
    console.log("Hello motherfather")
}
jsUser.greetingtwo = function(){
    console.log(`Hello motherfather, ${this.name}`)//referring the name in jsUSer values by this keywords
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());

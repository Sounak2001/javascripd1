const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
//console.log(map);
for(const [key,value] of map)//is we put key only it will give output as an array but in [key,values] it will be a string
{
    //console.log (key, ':',value);
}
const myObj = {
    game1: 'cod',
    game2: 'bgmi',
    game3 : 'pubg'
}
for(const key in  myObj)
{
   // console.log(`${key} structer is : ${myObj[key]}`);
}
const pr = ["hi ", "hello ", "kiya"]
for(const key of pr)//array te for of kaj kore na undefined dekhai to for in use korte hbe
{
    console.log(pr[key]);
}
const tinderUser ={}
tinderUser.id="123abc"
tinderUser.name="sounak"
tinderUser.isLoggedin=false
const regular={
    name:"sounak",
    fname : {

        userfname :{//we  can create as much as objects under objects as much as we want
            username:"sounak",
            lastname: "pramanik",
        }
    }
}
//console.log(regular.fname.userfname)
const obj1= {1:"a", 2:"b"}
const obj2={3:"v",4:"c"}
//const obj3=Object.assign({},obj1,obj2)//object.assign()copies and  combines two or more objects{}its a target and other obj1... are source
const obj4= {...obj1,...obj2}//another method of merging two objects spread method
//console.log(obj4);
const users =[//[]because when we have got data from database it cames with array format
    {
        id: 1,
        email: "h@gmail.com"
    }
    ,
    {
        id:2,
        email:"s@gmail.com",
    }
]
console.log(users[1].email)
console.log(tinderUser);
console.log(Object.keys(tinderUser));

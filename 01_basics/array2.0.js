const heroes=["thor","ironman","captain"]
const hero=["superman","flash","batman"]
//heroes.push(hero)
//console.log(heroes)
//const sup = heroes.concat(hero)//concat method combines two array and return a newly formed array
const nh = [...heroes,...hero]//spread method individualize the value and its not an array any amore
console.log(nh);
//console.log(typeof(nh))
//const arr=[1,2,3,[1,2,3],6,[5,6,7]]
//const newarr=arr.flat(Infinity)//flat method combines
//console.log(newarr)
console.log(Array.isArray("sounak"))//seeing that is sounak is an array or not
console.log(Array.from("sounak"))//converting sounak to an array
const s1=20
const s2= 80
const s3= 60
console.log(Array.of(s1,s2,s3))

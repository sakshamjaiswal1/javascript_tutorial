let details={
    name:"Saksham Jaiswal",
    age:"22",
    car:300000,
    cycle:2000,
    bike:50000,
}
let detArr=[1,2,4]
detArr.age=33
console.log(detArr)

for(let key in details ){
    let sum=0
    if (!(key=="name"||key=="age")) sum+=details[key]
   
}

for( keys in detArr){
    console.log(keys)
}
// for in takes the index of the array of object
// for of takes the value of the object or array or string
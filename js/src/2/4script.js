const Plane1 = {
    name: "Chilli",
    year:1960,
    color:"navy",
    state:"operatable",
    speed:460
}
console.log(Plane1)

for (const [key, value] of Object.entries(Plane1)) {
    console.log(`Key: ${key}, Value: ${value}`);
}

Object.keys(Plane1).forEach(index => {
    const value = Plane1[index]
    console.log(index+ " :")
    console.log(value)
    
});

const seznam = Array(1,2,"thisone",true,5.2)
for (const item of seznam) {
    console.log(item)
}

seznam.forEach(element => {
    console.log(element)
});

for (const key in Plane1) {
    if (Object.hasOwnProperty.call(Plane1, key)) {
        const element = Plane1[key];
        console.log(key + ":")
        console.log(element)
        
    }
}

console.log("--------------")

let{name,year,state,...other} =Plane1
const otherSeznam = [];
for (const key in other) {
    if (Object.hasOwnProperty.call(other, key)) {
        const element = other[key];
        otherSeznam.push(element)
        
    }
}
console.log(name,year,state,otherSeznam)

const takeNumber =(num1,num2,...rest)=>{
    return rest
}
console.log(takeNumber(4,6,1,2,23,"sd"))
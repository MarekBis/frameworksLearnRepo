const numbers= Array();

let iterace=0;
for (let i =0;i<50;i++){
    let mainNumber = Math.random()*10
    mainNumber = Math.ceil(mainNumber);
    if (!numbers.includes(mainNumber)){
        numbers.push(mainNumber);
        if(numbers.length == 10){
            console.log("Hotovo na iteraci num. " +iterace)
            console.log(numbers)
            break
        }
    }
    iterace++;
    
}
if (numbers.length !=10){
    console.log("Seznam nevyplnen vsemi moznymi cisly")
    console.log(numbers)
}
// while()
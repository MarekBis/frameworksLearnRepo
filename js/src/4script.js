// let age = prompt("Your age pls",21);

// const change = document.createElement("h1")
// age = Number(age);
// if(age){
//     if (age>=18) {
//         change.innerHTML = "Adult";
        
//     }else{
//         change.innerHTML = "Kid";
//     }
// }else{
//     change.innerText = "NOT A NUMBER"
// }
// document.body.appendChild(change);

function tipCalculator(amount,tip=0) {
    const tipAmount = (amount/100) * tip;
    tipAmount.toFixed(1);
    const totalAmount = amount + tipAmount;
    console.log(`Amount paid: ${amount}$`)
    console.log(`${tip} % tip: ${tipAmount}$`)
    return totalAmount ;
}
console.log(tipCalculator(59,8))


const selection = document.querySelector("section h1");
const selection2 = document.querySelector("header h1");
selection.innerHTML="selected"
selection2.innerHTML="selected22"
console.log("Hello")

let count = 0;
const clickMe = () => {
    console.log(count);
    const varrrr = 12;
    count++;
}

const calculate69 = () =>{
    const inputNumber = document.querySelector("#input-num");
    const valueNumber = Number(inputNumber.value);
    const totalValue = 69 +valueNumber;
    const h1Span = document.querySelector("h1 span");
    h1Span.innerText = totalValue;
}
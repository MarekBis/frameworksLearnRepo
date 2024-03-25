const bgCol = document.querySelector("#bg-color");
const textCol = document.querySelector("#text-color");
const fontSize = document.querySelector("#font-size");
const loremChange = document.querySelector("#Lorems");


bgCol.addEventListener("keyup",(event)=>{
    console.log(event.target.value)
    loremChange.style.backgroundColor = event.target.value;
})
textCol.addEventListener("keyup",(event)=>{
    console.log(event.target.value)
    loremChange.style.color=event.target.value;

})

fontSize.addEventListener("keyup",(event)=>{
    console.log(event.target.value)
    loremChange.style.fontSize=event.target.value + 'px';

})
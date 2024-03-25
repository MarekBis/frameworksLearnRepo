const inputField = document.querySelector("#text-input");
const changeField= document.querySelector("#change-name")
inputField.addEventListener("keyup",function(event){
    console.log(event.target.value)
    changeField.innerText=event.target.value
});
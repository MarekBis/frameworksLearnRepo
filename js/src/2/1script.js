
var ul = document.querySelector("#js-list")
var html = ''
var num = Number(prompt("Gimme a number",30))
var startingNum = 1
while(startingNum <= num) {
    //ONE OPTION
    const liAdd = document.createElement("li");
    liAdd.innerText="Iteration creation "+startingNum;
    ul.appendChild(liAdd)
    //SECOND OPT
    html = "<li>Iteration: " + startingNum + "</li>"
    ul.innerHTML += html

    
    startingNum++
}



// While loops syntax
// var num = Number(prompt("Give me a number"))
// var startingNum = 1
// while(startingNum <= num) {
//     console.log(startingNum)

//     // startingNum = startingNum + 1
//     startingNum++
// }

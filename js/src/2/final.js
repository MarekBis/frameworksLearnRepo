const title = document.querySelector("#title");
const array= title.innerHTML.split("")
let modifiedText=""
array.forEach((letter,index) => {
    if (letter === " "){
        modifiedText+=letter;
    }else{
        array[index] = `<span class="js-letter">${letter}</span>`
        modifiedText+=array[index];
    }
});

title.innerHTML=modifiedText;

const jsLetter = document.querySelectorAll(".js-letter")
jsLetter.forEach(node => {
    node.addEventListener("mouseover",()=>{
        console.log(node.innerText)
        node.classList.add("scale-rotate-color")
    })
    node.addEventListener("mouseout",()=>{
        console.log("out")
        node.classList.remove("scale-rotate-color")
    })
    console.log(node)

});



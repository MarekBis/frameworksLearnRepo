const button = document.querySelector("#click-me");
const clickTarget = document.querySelector("#click-number");

let totalClicks=0;
button.addEventListener('click',function(event){
    totalClicks+=1;
    clickTarget.innerHTML=totalClicks;

})

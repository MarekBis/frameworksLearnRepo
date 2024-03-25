let link = prompt("enter link URL","https://www.google.com/");

const ahrefLocation = document.querySelector("#link");


if (link == null){
    alert("expecting input");
}else{
    if (link.slice(0,4).toLowerCase() !="http"){
        link = "http://"+link;
    }
    console.log(link);
    ahrefLocation.innerHTML=`<a href="${link}">${link}</a>`;
}
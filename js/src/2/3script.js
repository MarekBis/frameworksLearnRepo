
class Modal{
    constructor(){
        this.modal = document.querySelector("#modal");
    }

    open(){
        this.modal.style.display = "block"
    }
    close(){
        this.modal.style.display = "none"
    }
    changeContent(text,title){
        if (text !==undefined){
            this.modal.querySelector("#text").innerText=text;
        }
        if(title !==undefined){
            this.modal.querySelector("#title").innerText=title;
        }
    }

}

const buttonOpen = document.querySelector("#open");
const buttonClose = document.querySelector("#close");

const modal = new Modal("My title","My text");
// modal.changeContent("New title","New text")

buttonOpen.addEventListener("click",function(event){
    modal.open()
})
buttonClose.addEventListener("click",function(){
    modal.close()
})
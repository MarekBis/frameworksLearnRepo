console.log("Hello World")


const passwords = ["asdasdasd","cgxcvxcdhgf",'234523452']


for (let index = 0; index < 10; index++) {
    let randomNum = Math.ceil(Math.random()*3);
    console.log(passwords[randomNum-1]);
}
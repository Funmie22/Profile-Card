function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    utcTimeElement.textContent = now.toISOString().slice(0, 19).replace("T", " ") + " UTC";
}

updateUTCTime();
const texts = [
    "Frontend Developer",
    "Javascript Developer",
    "React Developer",
    "Solidity Developer"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter


const theHeading=document.querySelector("#heading2")

function changeText(){
    theHeading.textContent= "YAY"
}

const button = document.querySelector('button') 

button.addEventListener('click', changeText)
  


const theHeading=document.querySelector("h1")

function changeText(){
    theHeading.textContent= "YAY"
}

const button = document.querySelector('button') 

button.addEventListener('click', changeText)
  
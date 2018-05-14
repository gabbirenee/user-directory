

const theHeading=document.querySelector("#heading2")


function changeText(){
    const theText=document.querySelector('input').value
    theHeading.textContent= theText
}

const button = document.querySelector('button') 

button.addEventListener('click', changeText)
  
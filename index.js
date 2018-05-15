

const theHeading=document.querySelector("#heading2")


const handleSubmit = function (ev){
    ev.preventDefault()
    const theHeading=document.querySelector("#heading2")
    const theText=document.querySelector('input')
    theHeading.textContent= theText.value
}

const form = document.querySelector('form#userForm') 

form.addEventListener('submit', handleSubmit)



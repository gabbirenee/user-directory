
const form = document.querySelector('form#userForm') 

const handleSubmit = function (ev){
    ev.preventDefault()
    const form = ev.target
    const userName=form.userName.value
    const theHeading=document.querySelector("#heading2")
    theHeading.textContent=userName
}

const form = document.querySelector('form#userForm') 

form.addEventListener('submit', handleSubmit)



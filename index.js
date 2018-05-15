
const form = document.querySelector('form#userForm') 

const handleSubmit = function(ev){
    ev.preventDefault()
    const form = ev.target
    const userName=form.userName.value
    const users=document.querySelector("#users")
    const age=form.age.value
    const favColor=form.favoriteColor.value

    const p = document.createElement('p')
    p.textContent = `${userName}, ${age}, ${favColor}`
    p.style.backgroundColor=favColor
    users.appendChild(p)
   
    // users.innerHTML += `<p>${userName}, ${age}</p>`
    form.reset()
    form.userName.focus()
}

form.addEventListener('submit', handleSubmit)




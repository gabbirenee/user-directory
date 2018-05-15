
const form = document.querySelector('form#userForm') 

const handleSubmit = function(ev){
    ev.preventDefault()
    const form = ev.target
    const userName=form.userName.value
    const users=document.querySelector("#users")
    const age=form.age.value
    const favColor=form.favoriteColor.value

    const list = document.createElement('ul')   //unordered list
    const nameItem = document.createElement('li')   //list items
    const ageItem=document.createElement('li')
    
    nameItem.textContent=`Name: ${userName}`
    ageItem.textContent=`Age: ${age}`

    list.appendChild(nameItem)
    list.appendChild(ageItem)
    users.appendChild(list) //attatches the list to the div
   
    // users.innerHTML += `<p>${userName}, ${age}</p>`
    form.reset()
    form.userName.focus()
}

form.addEventListener('submit', handleSubmit)




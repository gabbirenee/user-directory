
const form = document.querySelector('form#userForm') 

//Renders the color div that is displayed as the user's favorite color
function renderColor(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor=color
    colorDiv.style.width='6rem'     //width=6rems
    colorDiv.style.height='3rem'    //height=3rems  rems are relative to the font size on the page
    return colorDiv
}

//Renders the list items
function renderListItem (label, value) {
    const item = document.createElement('li')
    item.textContent=`${label}: `
    try {
        item.appendChild(value)
    } catch (e) {
        item.textContent += value
    }
    return item
}

//Renders the list and appends the list to the empty html div
function renderList (user) {
    const list = document.createElement('ul')   //unordered list

    Object.keys(user).map(function(label){  //Object.keys returns array of the keys
        const item= renderListItem(label, user[label])
        list.appendChild(item)
    })

    return list
}

const handleSubmit = function(ev){
    ev.preventDefault()
    const form = ev.target
    const user = {
        'Name': form.userName.value,
        'Age': form.age.value,
        'Favorite Color': renderColor(form.favoriteColor.value),
    }
    
    const users=document.querySelector("#users")
    
    const list= renderList(user)
    users.appendChild(list) //attatches the list to the div
   
    // users.innerHTML += `<p>${userName}, ${age}</p>`
    form.reset()
    form.userName.focus()
}

form.addEventListener('submit', handleSubmit)




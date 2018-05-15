
const form = document.querySelector('form#userForm') 

//Renders the color div that is displayed as the user's favorite color
function renderColor(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor=color
    colorDiv.style.width='6rem' //width=6rems
    colorDiv.style.height='3rem'    //height=3rems  rems are relative to the font size on the page
    return colorDiv
}

//Renders the Name, age, and favorite color list Items and appends them to the list
function renderListItem (list, userName, age, favColor) {
    const nameItem=document.createElement('li')
    const ageItem=document.createElement('li')
    const colorItem=document.createElement('li')

    nameItem.textContent=`Name: ${userName}`
    ageItem.textContent=`Age: ${age}`
    colorItem.textContent='Favorite Color: '

    colorItem.appendChild(renderColor(favColor)) //append colored div to the color item
    list.appendChild(nameItem)  //appends name to list
    list.appendChild(ageItem)   //appends age to list
    list.appendChild(colorItem) //append color to the list
}

function renderList (userName, age, favColor) {
    const list = document.createElement('ul')   //unordered list

    renderListItem(list, userName, age, favColor)

    users.appendChild(list) //attatches the list to the div
}

const handleSubmit = function(ev){
    ev.preventDefault()
    const form = ev.target
    const userName=form.userName.value
    const users=document.querySelector("#users")
    const age=form.age.value
    const favColor=form.favoriteColor.value
    
    renderList(userName, age, favColor);
   
    // users.innerHTML += `<p>${userName}, ${age}</p>`
    form.reset()
    form.userName.focus()
}

form.addEventListener('submit', handleSubmit)




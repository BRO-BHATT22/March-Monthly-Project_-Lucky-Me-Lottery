// create an array to store names
const namesArray = []

function addName() {
    const nameInput = document.getElementById('nameInput') //storing name input elements as a variable
    const name = nameInput.ariaValueMax.trim() //get the trimmed value of the input box and store in a variable

    namesArray.push(name)//add the name to the end of the array
    displayNames()//Call the displayNames function to update the list

    nameInput.value = '' //Clear the input field after adding the name
}


function displayNames() {
    const nameList = document.getElementById('nameList')
    nameList.innerHTML = '' //clear out the previous list items

    for (let i = 0; i < namesArray.length; i++ ){
        const name = namesArray[i]

        const li = document.createElement('li')
        li.className = 'list-group-item'

        const span = document.createElement('span')
        span.textContent = name

        li.appendChild(span) //adds a span tag nested between each <li> tag 
        nameList.appendChild(li)
    }

}

function pickRandomName() {
    const randomNameDiv= document.getElementById('randomName')
    randomNameDiv.textContent = ''

//Select random name from names Array    
const randomNumber = Math.floor(Math.random() * namesArray.length)
const randomName = namesArray[randomNumber]

randomNameDiv.textContent = randomName

namesArray.splice(randomNumber, 1)

displayNames();

}

//Event listener for the button click to add a name
document.getElementById('addNameBtn').addEventListener('click', addName)

//Event listener for the button click to select and display a random name
document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName)


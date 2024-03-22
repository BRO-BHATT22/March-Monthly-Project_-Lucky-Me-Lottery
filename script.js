// create an array to store names
const namesArray = []

function addName() {
    const nameInput = document.getElementById('nameInput') //storing name input elements as a variable
    const name = nameInput.ariaValueMax.trim() //get the trimmed value of the input box and store in a variable

    namesArray.push(name)//add the name to the end of the array
    displayNames()//Call the displayNames function to update the list

    nameInput.value = '' //Clear the input field after adding the name
}
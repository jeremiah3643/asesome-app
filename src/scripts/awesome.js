
//Final OUtput DOM component reference
const output = document.querySelector(".output")

//Fragment to hold all the stuff, so we inject into the DOM once
const fragment = document.createDocumentFragment()

// Create factory function to generate components
// Create input componnent
const inputFieldFactory = (classList, defaultPlaceholderText, type) => {
    const inputField = document.createElement("input")
    inputField.setAttribute("type", type)
    inputField.classList = classList
    inputField.placeholder = defaultPlaceholderText
    return inputField
}

// Create button component
const buttonFactory = (classList, textContent) => {
    const theButton = document.createElement("button")
    theButton.classList = classList
    theButton.textContent = textContent
    return theButton
}



// Attach event listener to button
createCardButton.addEventListener("click", function () {
    // 1. Get value of input field
    const userEntry = cardTextInput.textContent
    // 2. Create card component with text inside

})



const createCardButton = buttonFactory("button--submit", "Create Card")
const cardTextInput = ("input--text", "Enter card text here", "text")


fragment.appendChild(cardTextInputs)
fragment.appendChild(createCardButton)




// Create card component

//




output.appendChild(fragment)


// Variables
let addBtn = document.querySelector("#addBtn");
let groceryInput = document.querySelector("#grocery-input");
let savedList = document.querySelector("#savedList");
let groceryList = [];

// Function to save new item to localStorage
let saveItem = () => {
    localStorage.setItem("groceries", JSON.stringify(groceryList));

    retrieveItems();
}

// Function to retrieve items from localStorage
let retrieveItems = () => {
    let storedItems = JSON.parse(localStorage.getItem("groceries"));

    console.log(storedItems);

    savedList.textContent = "";

    // If there are items stored in localStorage
    if (storedItems !== null) {
        storedItems.forEach(item => {
            // Then create a new <p> element for each saved item
            let groceryItem = document.createElement("p");
            groceryItem.textContent = item;
            groceryItem.setAttribute("class", "saved-items")

            // Create a new delete button for each saved item
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "x";
            deleteBtn.setAttribute("class", "deleteBtns")
            
            // Append to the savedList div
            savedList.appendChild(groceryItem);
            groceryItem.appendChild(deleteBtn);
        })
    }
}

// Function definition to add a new item to the grocery list when add button is clicked
let addItem = event => {
    event.preventDefault();

    let storedItems = JSON.parse(localStorage.getItem("groceries"));

    // If there are items saved in localStorage, set the groceryList array equal to the saved list
    if (storedItems !== null) {
        console.log(storedItems);
        groceryList = storedItems;

        // If the grocery item input is not an empty string, the item will be added to the groceryList array and then the input field is cleared
        if (groceryInput.value !== "") {
            groceryList.push(groceryInput.value.trim());

            groceryInput.value = "";
            saveItem();
        }
    }
}

// Function definition to add a new item to the grocery list when enter key is pressed
let addItemKeyUp = event => {
    let storedItems = JSON.parse(localStorage.getItem("groceries"));

    // If there are items saved in localStorage, set the groceryList array equal to the saved list
    if (storedItems !== null) {
        groceryList = storedItems;

        // If the grocery item input is not an empty string, the item will be added to the groceryList array and then the input field is cleared
        if (groceryInput.value !== "" && event.keyCode === 13) {
            groceryList.push(groceryInput.value.trim());

            groceryInput.value = "";
            saveItem();
        }
    }
}

// Retrieve saved items from localStorage
retrieveItems();

// When the "+" button is clicked, the addItem function will kick off
addBtn.addEventListener("click", addItem);

// When the enter key is pressed, the addItem function will kick off
groceryInput.addEventListener("keyup", addItemKeyUp);
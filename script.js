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

    if (storedItems !== null) {
        storedItems.forEach(item => {
            let groceryItem = document.createElement("p");
            groceryItem.textContent = item;
            savedList.appendChild(groceryItem);
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
    // console.log(groceryList);
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

    // console.log(groceryList);
}

// Retrieve saved items from localStorage
retrieveItems();

// When the "+" button is clicked, the addItem function will kick off
addBtn.addEventListener("click", addItem);

groceryInput.addEventListener("keyup", addItemKeyUp);
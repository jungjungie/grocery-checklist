// Variables
let addBtn = document.querySelector("#addBtn");
let clearBtn = document.querySelector("#clearBtn");
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
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "item-containers")

            // Create a new <p> element for each saved item
            let groceryItem = document.createElement("p");
            groceryItem.textContent = item;

            // Create a new delete button for each saved item
            let deleteBtn = document.createElement("button");
            deleteBtn.setAttribute("class", "deleteBtns");
            deleteBtn.setAttribute("data-id", storedItems.indexOf(item));

            // Append to the savedList div
            savedList.appendChild(newDiv);
            newDiv.appendChild(deleteBtn);
            newDiv.appendChild(groceryItem);

            // When the delete button is clicked, remove the item from the storedItems array based on the matching data-id
            deleteBtn.addEventListener("click", function () {
                // console.log(deleteBtn.dataset.id);
                storedItems.splice(deleteBtn.dataset.id, 1);
                // console.log(storedItems);

                groceryList = storedItems;
                saveItem();
            })
        })
    }
}

// Function to add a new item to the grocery list when add button is clicked
let addItem = event => {
    event.preventDefault();

    let storedItems = JSON.parse(localStorage.getItem("groceries"));

    // If the grocery item input is not an empty string
    if (groceryInput.value !== "") {

        // If there are no saved items in localStorage, then add the new item to the groceryList array and clear the input box
        if (storedItems === null) {
            groceryList.push(groceryInput.value.trim());

            saveItem();

            // If there are saved items in localStorage, set the groceryList array to the saved items, then add the new item to the array and clear the input box
        } else {
            groceryList = storedItems;
            groceryList.push(groceryInput.value.trim());

            saveItem();
        }

        // Clear the input box
        groceryInput.value = "";
    }

    
}

// Function definition to add a new item to the grocery list when enter key is pressed
let addItemKeyUp = event => {
    let storedItems = JSON.parse(localStorage.getItem("groceries"));

    // If the grocery item input is not an empty string and key pressed is the 'Enter' key
    if (groceryInput.value !== "" && event.keyCode === 13) {
        // If localStorage is empty, then push the new item to the groceryList array
        if (storedItems === null) {
            groceryList.push(groceryInput.value.trim());

            saveItem();

            // If localStorage is not empty, then set the groceryList array to the saved items and then push the new item to the array
        } else {
            groceryList = storedItems;
            groceryList.push(groceryInput.value.trim());
        }

        // Clear the input box
        groceryInput.value = "";
    }
}

// Retrieve saved items from localStorage
retrieveItems();

// Event listeners
addBtn.addEventListener("click", addItem);
groceryInput.addEventListener("keyup", addItemKeyUp);

clearBtn.addEventListener("click", function () {
    // Clears the grocery list from localStorage and the savedList div
    localStorage.clear();
    savedList.textContent = "";
    groceryList = [];
})
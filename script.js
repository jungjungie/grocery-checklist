// Variables
let addBtn = document.querySelector("#addBtn");
let groceryInput = document.querySelector("#grocery-input");
let groceryList = [];

// Function to save new item to localStorage
let saveItem = () => {
    localStorage.setItem("groceries", JSON.stringify(groceryList));
}

// Function definition to add a new item to the grocery list when add button is clicked
let addItem = event => {
    event.preventDefault();

    // If the grocery item input is not an empty string, the item will be added to the groceryList array and then the input field is cleared
    if (groceryInput.value !== "") {
        groceryList.push(groceryInput.value.trim());
    
        groceryInput.value = "";
    }
    // console.log(groceryList);
    
    // Save to localStorage
    saveItem();
}

// Function definition to add a new item to the grocery list when enter key is pressed
let addItemKeyUp = event => {
    // If the grocery item input is not an empty string, the item will be added to the groceryList array and then the input field is cleared
    if (groceryInput.value !== "" && event.keyCode === 13) {
        groceryList.push(groceryInput.value.trim());
    
        groceryInput.value = "";
    }
    // console.log(groceryList);

    // Save to localStorage
    saveItem();
}

// When the "+" button is clicked, the addItem function will kick off
addBtn.addEventListener("click", addItem);

groceryInput.addEventListener("keyup", addItemKeyUp);
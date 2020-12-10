// Variables
let addBtn = document.querySelector("#addBtn");
let groceryInput = document.querySelector("#grocery-input");
let groceryList = [];

// Function definition to add a new item to the grocery list
let addItem = (event) => {
    event.preventDefault();

    // If the grocery item input is not an empty string, the item will be added to the groceryList array and then the input field is cleared
    if (groceryInput.value !== "") {
        groceryList.push(groceryInput.value.trim());
    
        groceryInput.value = "";
    }
   
    console.log(groceryList);
}

// When the "+" button is clicked, the addItem function will kick off
addBtn.addEventListener("click", addItem);
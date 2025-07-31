// create an initial array
let items = ['hello world', '123'];

const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput");

function renderItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div");
        container.style.marginBottom = '10px';

        const text = document.createElement("p");
        text.style.display = "inline";
        text.style.marginRight = "10px";
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.onclick = () => removeItem(idx);

        container.appendChild(text);
        container.appendChild(button);

        itemsDiv.appendChild(container);
    }
}

function addItem() {
    const value = input.value.trim();
    if (!value) {
        alert("You cannot add an empty item");
        return;
    }
    items.push(value); // ✅ fixed here
    input.value = "";
    renderItems();
    saveItems();
}

function removeItem(idx) {
    items.splice(idx, 1);
    renderItems();
    saveItems();
}

function saveItems() {
    localStorage.setItem("todo-items", JSON.stringify(items));
}

function loadItems() {
    const stored = localStorage.getItem("todo-items");
    if (stored) {
        items = JSON.parse(stored);
    }
}

// Load from localStorage if available
loadItems();
renderItems();
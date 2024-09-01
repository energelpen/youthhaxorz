const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.json');

// Allowed categories
const allowedCategories = ["Rice", "Wheat", "Flour", "Instant Noodles", "Fruits", "Condiments", "Others"];

// Function to read JSON data from file
function readData() {
    try {
        const data = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading the file:', error);
        return null;
    }
}

// Function to count items by category
function countItemsByCategory(category) {
    if (!allowedCategories.includes(category)) {
        console.error("Invalid category");
        return 0;
    }

    const data = readData();
    if (!data) return 0;

    return data.list.filter(item => item.itemtype === category).length;
}

// Function to find items by location
function findItemsByLocation(location) {
    const data = readData();
    if (!data) return [];

    return data.list.filter(item => item.location === location);
}

// Function to add a new item
function addItem(item) {
    if (!allowedCategories.includes(item.itemtype)) {
        console.error("Invalid item category");
        return;
    }

    const data = readData();
    if (!data) return;

    data.list.push(item);

    // Save the updated data
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
}

// Function to query items by type
function queryItemsByType(type) {
    if (!allowedCategories.includes(type)) {
        console.error("Invalid item type");
        return [];
    }

    const data = readData();
    if (!data) return [];

    return data.list.filter(item => item.itemtype === type);
}

// Example usage
console.log("Count of Rice items:", countItemsByCategory("Rice"));
console.log("Items at location 1:", findItemsByLocation("1"));

addItem({
    "itemid": "4",
    "itemtype": "Fruits",
    "prodNam": "Apple 1kg",
    "location": "2"
});

console.log("Updated Data:", readData());
console.log("Fruits available:", queryItemsByType("Fruits"));

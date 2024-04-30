alert("Testing: index.js connected")

$(function(){
    $("#page-header").load("/public/views/header.html");
}); 


// Function to change color on mouseover and mouseout
function addRolloverEffect(selector) {
    const items = document.querySelectorAll(selector);

    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = 'blue'; // Change the color on mouseover
        });

        item.addEventListener('mouseout', () => {
            item.style.color = ''; // Reset the color on mouseout
        });
    });

    return items;
}

// Create variables for each menu item and add rollover effect
const menuItems = addRolloverEffect('.account-button');
const searchItems = addRolloverEffect('.search-button');
const uploadItems = addRolloverEffect('.upload-button');

// Function to navigate to other pages when clicked
function addClickNavigation(items, page) {
    items.forEach(item => {
        item.addEventListener('click', () => {
            window.location.href = page;
        });
    });
}

// Navigate to other pages when clicked
addClickNavigation(searchItems, '/search.html');
addClickNavigation(uploadItems, '/submitvideo.html');
addClickNavigation(menuItems, '/account.html');

$(function(){
    $("#header").load("/public/views/header.html");
}); 


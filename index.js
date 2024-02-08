import express from 'express';
const app = express();
const port = 3000;

/**app.get("/", (req, res)=>{
    console.log(req);
});

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});

**/
//create variables for each menu item
//change color on rollover
const menuItems = document.querySelectorAll('.search-button');

        menuItems.forEach(item => {
            item.addEventListener('mouseover', () => {
                item.style.color = 'blue'; // Change the color on mouseover
            });

            item.addEventListener('mouseout', () => {
                item.style.color = ''; // Reset the color on mouseout
            });
        });
const searchItems = document.querySelectorAll('.account-button');

        searchItems.forEach(item => {
            item.addEventListener('mouseover', () => {
                item.style.color = 'blue'; // Change the color on mouseover
            });

            item.addEventListener('mouseout', () => {
                item.style.color = ''; // Reset the color on mouseout
            });
        });
const uploadItems = document.querySelectorAll('.upload-button');

        uploadItems.forEach(item => {
            item.addEventListener('mouseover', () => {
                item.style.color = 'blue'; // Change the color on mouseover
            });

            item.addEventListener('mouseout', () => {
                item.style.color = ''; // Reset the color on mouseout
            });
        });


        //Navigate to other pages when clicked
        searchItems.forEach(item => {
            item.addEventListener('click', () => {
                window.location.href = 'http://www.google.com';
            });
        });
        uploadItems.forEach(item => {
            item.addEventListener('click', () => {
                window.location.href = 'http://www.google.com';

            });
        });        
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                window.location.href = 'http://www.google.com';
            });
        });
        
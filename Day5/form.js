const usersArray = [];

const submitButton = document.getElementById('form');


function registerUser(event) {
    
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const city = document.getElementById('city').value;

    const user = {
        name: name,
        password: password,
        city: city
    };

    usersArray.push(user);

    // Print the user array
    console.log(usersArray);
}


// Get the submit button by its ID

// Add a click event listener to the submit button
submitButton.addEventListener('submit', registerUser);

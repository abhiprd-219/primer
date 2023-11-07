const usersArray = [];

function registerUser() {
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


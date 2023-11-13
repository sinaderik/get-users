const userList = document.getElementById("userlist");

const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json();
        showUsers(data)
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
}

const showUsers = (data) => {
    data.forEach(user => {
        const userItem = document.createElement("li");
        userItem.textContent = user.name;
        userList.appendChild(userItem)
    })
}

getUsers();
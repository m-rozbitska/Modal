function request() {
    fetch("https://jsonplaceholder.typicode.com/users").then(function(response) {
        return response.json();
    }).then((response)=>{
        console.log(response);
        var username = document.getElementById("username");
        username.innerHTML = "Username:" + response.username + "Id:" + response.id;
    });
}

//# sourceMappingURL=index.579125c3.js.map

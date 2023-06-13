document.addEventListener("DOMContentLoaded", () => {

   fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((isUser) => {
            const usersResult = document.querySelector('#usersResult');
            isUser.forEach(user => {
               usersResult.insertAdjacentHTML('beforeend',
               `<div>ID: ${user.id}</div>  
               <div>NAME: ${user.name}</div>
               <div><button data-user-id="${user.id}">FETCH TODOS</button></div>
               <div class="todos" data-user-id="${user.id}" style="margin-bottom: 15px;"></div>
            `);
         });     
      

   const userBtns = document.querySelectorAll('button[data-user-id]');

      userBtns.forEach(button => {
         button.addEventListener('click', function(event) {
            event.preventDefault();
            const userId = event.target.dataset.userId;
            const todosWrapper = document.querySelector(`.todos[data-user-id="${userId}"]`);

            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
            .then(response => response.json())
            .then(todos => {
                     if(todos != null) {
                     todos.forEach(todo => {
                        todosWrapper.insertAdjacentHTML('beforeend', `
                        <div>ID: ${todo.id}; TITLE: ${todo.title}; COMPLETED: ${todo.completed}</div>`);
                     })
                        } else {
                        return;
                     }
                  })
               })
            })
         });
       });

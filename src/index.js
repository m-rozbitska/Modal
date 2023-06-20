document.addEventListener("DOMContentLoaded", () => {
   debugger
   fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((isUser) => {
            const usersResult = document.querySelector('#tableUser');
            isUser.forEach(user => {
               usersResult.insertAdjacentHTML('beforeend',
               `
               <table class="table__user">
               <tr>
                 <th>ID: ${user.id}</th>
                 <th>NAME: ${user.name}</th>
                 <th>USERNAME: ${user.username}</th>
                 <th>EMAIL: ${user.email}</th>
                 <th>ADDRESS: ${user.address.city}</th>
                 <th>ACTIONS:
               <div><button data-user-id="${user.id}" style="">FETCH TODOS</button></div>
               <div class="todos" data-user-id="${user.id}" style="padding: 20px,"></div></th>
               </tr> 
             </table>
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
                  });
               } else {
                  return;
               };
            });
         });
      });
   });
});

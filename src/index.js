document.addEventListener("DOMContentLoaded", () => {
   const tableWrapper = document.querySelector('#tableWrapper');
   
   tableWrapper.insertAdjacentHTML('beforeend',`
      <table class="table__user" id="tableUser" width = "100%">
         <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
            <th>ACTIONS</th>
         </tr> 
      </table>
   `);

   tableWrapper.insertAdjacentHTML('beforeend',`
      <table class="table__todo" id = "result1" width = "100%">
         <tr>
            <th>userId</th>
            <th>ID</th>
            <th>TITLE</th>
            <th>COMPLETED</th>
         </tr> 
      </table>
   `);

   const usersResult = document.querySelector('#tableUser');
   
   fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((isUser) => {
         isUser.forEach(user => {
            usersResult.insertAdjacentHTML('beforeend', `
            <tr>
               <td>${user.id}</td>
               <td>${user.name}</td>
               <td>${user.username}</td>
               <td>${user.email}</td>
               <td>${user.address.city}</td>
               <td>
                  <button class="todos" id = "todosBtn "data-user-id="${user.id}" style="padding: 20px,">TODOS</button>
                  <button class = "btn__posts" data-user-id="${user.id}"  style="margin: 5px;">Posts</button>
                  <button class = "btn__albums"  data-user-id="${user.id}"  style="margin 5px;">Albums</button>
               </td>
            </tr> 
         `);
      });     
      

   const userBtns = document.querySelectorAll('button[data-user-id]');

      userBtns.forEach(button => {
         button.addEventListener('click', function(event) {
            const userId = event.target.dataset.userId;

         fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
            .then(response => response.json())
            .then(todos => {
               if(todos != null) {
                  todos.forEach(todo => {
                     
                  const resultFirst = document.querySelector('#result1');

                     resultFirst.insertAdjacentHTML('beforeend', `
                        <tr>
                           <td data-user-id="${todo.userId}">${todo.userId}</td>
                           <td>${todo.id}</td>
                           <td>${todo.title}</td>
                           <td>${todo.completed}</td>
                        </tr> 
                     `);
                  });
               } else {
                  return;
               };
            });
         });
      });
   });
});

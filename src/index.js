document.addEventListener("DOMContentLoaded", () => {
   const tableWrapper = document.querySelector('#tableWrapper');

   tableWrapper.insertAdjacentHTML('beforeend', `
      <table id="userTable" width = "100%">
         <tr>
            <th colspan ="9">Users</th>
         </tr>
         <tr>
            <th>Id</th>
            <th>Name</th>
            <th>User name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Action</th>
         </tr>
      </table>
   `);

   const userTable = document.querySelector('#userTable');

   fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
         users.forEach(user => {
            userTable.insertAdjacentHTML('beforeend', `
               <tr>
                  <td>${user.id}</td>
                  <td>${user.name}</td>
                  <td>${user.username}</td>
                  <td>${user.email}</td>
                  <td>${user.address.city}</td>
                  <td>${user.phone}</td>
                  <td>${user.website}</td>
                  <td>${user.company.name}</td>
                  <td>
                     <button data-user-id="${user.id}" id = "todo-btn"
                     class = "todo-btn button" style="margin: 5px auto;">Todos</button>
                     <button data-user-id="${user.id}" id = "post-btn" class = "post-btn button" style="margin: 5px auto;">Posts</button>
                     <button data-user-id="${user.id}"  id = "album-btn" class = "album-btn button" style="margin: 5px auto;">Albums</button>
                  </td>
               </tr>
            `); 
         });

            


   const userBtns = document.querySelectorAll('button[data-user-id]');

      userBtns.forEach (button => { 
         button.addEventListener('click', function(event) {
         let target = event.target; 
         const userId = event.target.dataset.userId; 
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`) 
               .then(response => response.json()) 
               .then(todos => { 
                  if(target.classList.contains('todo-btn')) { 
                     tableWrapper.insertAdjacentHTML('beforeend',` 
                     <table class="todo" id = "result1" width = "100%"> 
                        <tr>
                           <th colspan ="4">TODOS</th>
                        </tr>
                           <tr> 
                              <th>userId</th> 
                              <th>ID</th> 
                              <th>TITLE</th> 
                              <th>COMPLETED</th> 
                           </tr>  
                        </table>`); 

                     todos.forEach(todo => { 
                     let resultFirst = document.querySelector('#result1');

                     resultFirst.insertAdjacentHTML('beforeend', ` 
                           <tr> 
                              <td>${todo.userId}</td> 
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
               
            fetch(`https://jsonplaceholder.typicode.com/user/${userId}/posts`)
               .then((response) => response.json())
               .then(posts => { 
                  if(target.classList.contains('post-btn')) {
                     tableWrapper.insertAdjacentHTML('beforeend',` 
                     <table class="todo" id = "result1" width = "100%"> 
                        <tr>
                           <th colspan ="5">POSTS</th>
                        </tr>
                           <tr> 
                              <th>USER ID</th> 
                              <th>ID</th> 
                              <th>TITLE</th> 
                              <th>BODY</th> 
                              <th>ACTION</th>
                           </tr>  
                        </table>`); 
                        posts.forEach(post => {
                        let resultFirst = document.querySelector('#result1'); 
                           resultFirst.insertAdjacentHTML('beforeend', `
                           <tr> 
                              <td>${post.userId}</td> 
                              <td>${post.id}</td> 
                              <td>${post.title}</td> 
                              <td>${post.body}</td> 
                              <td>
                              <button data-post-id="${userId}" class = "button comment-btn" style="margin: 5px auto;">Comments</button>
                              </td>
                        </tr>  
                           `);
                        });
                     } else {
                        return
                     };
                  });

               fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`) 
                  .then((response) => response.json())
                  .then((albums) => {
                     if(target.classList.contains('album-btn')) {
                        tableWrapper.insertAdjacentHTML('beforeend',` 
                        <table class="todo" id = "result1" width = "100%"> 
                           <tr>
                              <th colspan ="3">ALBUMS</th>
                           </tr>
                              <tr> 
                                 <th>USER ID</th> 
                                 <th>ID</th> 
                                 <th>TITLE</th> 
                                 <th>ACTION</th>
                              </tr>  
                           </table>`); 

                        albums.forEach(album => {
                           let resultFirst = document.querySelector('#result1'); 
                           resultFirst.insertAdjacentHTML('beforeend', ` 
                           <tr> 
                              <td>${album.userId}</td> 
                              <td>${album.id}</td> 
                              <td>${album.title}</td> 
                              <td>
                                 <button data-album-id="${userId}" class = "button" style="margin: 5px auto;">Photos</button>
                           </td>
                           </tr>  
                        `); 
                        })
                     } else {
                        return;
                     };
               });
            }); 
         });

         
      const resultWrapper = document.querySelector('#resultWrapper');

      resultWrapper.insertAdjacentHTML('beforeend', `
         <table id = "result2" width = "100%">
            <tr>
               <th colspan ="5">Result 2</th>
            </tr>
            <tr>
               <th>Post id</th>
               <th>Id</th>
               <th>Name</th>
               <th>Email</th>
               <th>Body</th>
            </tr>
         </table>
      `)
      
      const  btnComment = document.querySelectorAll('button[data-post-id]');

      btnComment.forEach(comment => {
         comment.addEventListener('click', function(event) {
               let target = event.target; 
               const userId = event.target.dataset.userId; 
               fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
                  .then((response) => response.json())
                  .then((comments) => {
                     if(target.classList.contains('comment-btn')) {
                        comments.forEach(comment => {
                           let resultSecond = document.querySelector('#result2')
                           resultSecond.insertAdjacentHTML('beforeend', `
                           <tr> 
                              <td data-post-id="${comment.userId}">${comment.userId}</td> 
                              <td>${comment.id}</td> 
                              <td>${comment.name}</td> 
                              <td>${comment.email}</td> 
                              <td>${comment.body}</td> 
                           </tr>  
                           `);
                        });
                     };
                  });
         });
      });
   });
});



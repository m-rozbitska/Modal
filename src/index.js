document.addEventListener("DOMContentLoaded", () => {

   let usersResult = document.querySelector('#usersResult');
   let userBtn = document.querySelectorAll('.btn');
  
   

   
   fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((isUser) => {
         if(isUser != null) {
            isUser.forEach(element => {
               usersResult.innerHTML +=
               `<div class = "user__html-title" id="userTitleId${element.id}">
               <p>Id:${element.id}</p><br>
               <p>Name:${element.name}</p><br>
               <button class="btn" id ="userBtn">User info: ${element.name}</button>
               </div>
            `;
            });
         };
      });

    

      

      userBtn.forEach(elem => {
         elem.addEventListener('click', function(event) {
            event.preventDefault();
            let userTodo =  elem.closest('.user__html-title').querySelector('#user__id').textContent;

            fetch('https://jsonplaceholder.typicode.com/users/1/todos')
               .then((response) => response.json())
               .then((isUser) => {
                  if (isUser[userTodo].id != null) {
                        userBtn.closest('.user__html-title').querySelector('.user__info').innerHTML =
                           `<p>User id: ${isUser[userTodo].userId}</p>
                           ` } else {
                              return;
                  }
               })
            })
         })
      });















      

//       userBtn.forEach(el => {
//          el.addEventListener('click', function(event) {
//             event.preventDefault();

//             let userTodo =  el.closest('.user__html-title').querySelector('#user__id').textContent;

//             fetch('https://jsonplaceholder.typicode.com/users/1/todos')
//                      .then((response) => response.json())
//                      .then((userHtml) => {
//                         if (userHtml[userTodo].id != null) {
//                            el.closest('.user__html-title').querySelector('.user__info').innerHTML =
//                               `<p>User id: ${userHtml[userTodo].userId}</p>
//                            `
//                         } else {
//                            return;
//                         }
//          })
//       })
// });



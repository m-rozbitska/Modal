document.addEventListener("DOMContentLoaded", () => {
   let usersResult = document.querySelector('#usersResult');


   document.querySelector('body').addEventListener('click', function (e) {
      if (e.target.classList.contains("users__info")) {
         fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => response.json())
         // .then((json) => console.log(json))
         .then((userInfo) => {
            if(userInfo != null) {
               let result = 0;
               userInfo.forEach(element => {
                  console.log(userInfo[result]);
                  usersResult.innerHTML +=
                       `<p>
                       Name:<br>${userInfo[result].name}<br>
                       Username:<br>${userInfo[result].username}
                       Company name:<br>${userInfo[result].company.name}
                       Id:<br>${userInfo[result].id}<br>
                       Email:<br>${userInfo[result].email}<br>
                    </p>`;
                  result++;
               }); 
            }else {
               return
            }
         })  
          }
      })

      document.querySelectorAll('button').addEventListener('click', function(e) {
         
      })

})


  
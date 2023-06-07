document.addEventListener("DOMContentLoaded", () => {
   
   fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((isUser) => {
         if(isUser != null) {
            isUser.forEach(element => {
               // console.log(element.address.city);
            });
         };
      });
});


   
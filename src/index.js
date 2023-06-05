fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify({
    id: 3,
    name: "Undefined",
    username: "name777",
    company: [ {
        name: "Deleted",
      }
    ]
    
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  const btn = document.querySelector('.request__btn');

  btn.addEventListener('click', function() {
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(data){
      console.log(data)
      return data.json()
    })
    .then(function(data){
      const todoResults = document.getElementById('todo__results')
      todoResults.innerHTML = `<p>Todo User Id: ${data.id}</p>`
      console.log(data.id)
    })

  })


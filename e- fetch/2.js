const fetchPromise = fetch('https://bootcamp.todo.arhamsoft.org/client/todo/list?userId=1');

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data.todos);
    // data.forEach(element => {
    //     console.log(element);
    // });
  })
  .catch((error) => console.log(error));    // This will only run if there is an error. Try giving invalid link to force error.
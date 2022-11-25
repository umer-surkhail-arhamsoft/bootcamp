const fetchPromise = fetch('https://bootcamp.todo.arhamsoft.org/client/todo/list?userId=1');
console.log(fetchPromise);
fetchPromise.then((response) => {  console.log(`Received response: ${response.json()}`); });
console.log("Started request…");


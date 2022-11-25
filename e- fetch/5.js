// fetch("https://bootcamp.todo.arhamsoft.org/client/todo/create", {
//     method: "POST",
//     body: JSON.stringify({
//         title: "arhamsoft-user",
//         body: "techlift",
//         userId: 1
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
// .then(response => response.json())
// .then(json => console.log(json, "json response ....."));
fetch("https://bootcamp.todo.arhamsoft.org/client/todo/delete/636f41eda4faeb6deafe9381", {
    method: "DELETE"
})
.then(response => response.json())
.then(json => console.log(json, "json response ....."));
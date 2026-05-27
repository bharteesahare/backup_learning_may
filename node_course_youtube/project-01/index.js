const express = require('express');
const app = express();
const PORT = 8000;


app.listen(PORT, () => {
    console.log(`server  ${PORT}`)
})

app.patch("/api/users/:id", (req,res) => {
    const id = req.params.id;
    const user = users.map((user) => user.id === id);
})


app.get('/users', (req,res) => {
    const html = `
    <ul>
    ${users.map((user) => `li`)}
    </ul>
    `
})
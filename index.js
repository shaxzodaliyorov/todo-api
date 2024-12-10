let TODO = [
  {
    title: "task 1",
    id: 1,
    completed: false,
  },
  {
    title: "task 2",
    id: 2,
    completed: false,
  },
  {
    title: "task 3",
    id: 3,
    completed: false,
  },
];
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/todo", (req, res) => {
  res.json(TODO);
});

app.post("/todo", (req, res) => {
  const newTodo = req.body;
  TODO.push(newTodo);
  res.json(TODO);
});

app.delete("/todo/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(id);

  TODO = TODO.filter((todo) => todo.id !== id);
  res.json(TODO);
});

app.put("/todo/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = TODO.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  res.json(TODO);
});

app.listen(8080, () => {
  console.log(" server is runing on port 8080");
});

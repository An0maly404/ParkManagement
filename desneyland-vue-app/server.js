const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

const users = [];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const user = { name: req.body.name, password: req.body.password };
  users.push(user);
  res.status(201).send();
});

app.post('/users/login', (req, res) => {
  const user = users.find(user => user.name === req.body.name);
  if (!user) {
    return res.status(400).send("User not found");
  }
  if (user.password !== req.body.password) {
    return res.status(400).send();
  }
  res.send();
});

app.listen(3000, () => console.log('Server is running on port 3000'));

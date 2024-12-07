const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

//--------------------------------------------

const users = [];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const existingUser = users.find(user => user.name === req.body.name);
  if (existingUser) {
    return res.status(400).send("Username already taken.");
  }
  const user = { name: req.body.name, password: req.body.password };
  users.push(user);
  res.status(201).send("User registered successfully.");
});


app.post('/users/login', (req, res) => {
  const user = users.find(user => user.name === req.body.name);
  if (!user) {
    return res.status(400).send("User not found");
  }
  if (user.password !== req.body.password) {
    return res.status(400).send("Incorrect password");
  }
  // Return the username upon successful login
  res.send({ username: user.name });
});


//--------------------------------------------

let tickets = []; // In-memory storage for tickets

app.post('/tickets', (req, res) => {
  const { username, numberOfDays, hotelChoice, ticketDetails, totalPrice } = req.body;

  if (!username || !numberOfDays || !hotelChoice || !ticketDetails || !totalPrice) {
    return res.status(400).send("Invalid ticket data");
  }

  const newTicket = {
    username,
    numberOfDays,
    hotelChoice,
    ticketDetails,
    totalPrice,
    createdAt: new Date(),
  };

  tickets.push(newTicket);
  res.status(201).send("Ticket saved successfully");
});

app.get('/tickets/:username', (req, res) => {
  const userTickets = tickets.filter(ticket => ticket.username === req.params.username);
  res.json(userTickets);
});




// ----------------------------------

app.listen(3000, () => console.log('Server is running on port 3000'));

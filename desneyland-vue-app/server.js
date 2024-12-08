const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt'); // Import bcrypt
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

//--------------------------------------------

const users = []; // In-memory user storage

// Fetch all users (for testing only - not secure to expose in production)
app.get('/users', (req, res) => {
  res.json(users.map(user => ({ name: user.name }))); // Avoid exposing passwords
});

// Register new user
app.post('/users', async (req, res) => {
  const { name, password } = req.body;

  // Check if username already exists
  const existingUser = users.find(user => user.name === name);
  if (existingUser) {
    return res.status(400).send("Username already taken.");
  }

  try {
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Save user with hashed password
    const user = { name, password: hashedPassword };
    users.push(user);
    res.status(201).send("User registered successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error registering user.");
  }
});

// User login
app.post('/users/login', async (req, res) => {
  const { name, password } = req.body;

  // Find user by username
  const user = users.find(user => user.name === name);
  if (!user) {
    return res.status(400).send("User not found.");
  }

  try {
    // Compare the provided password with the hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).send("Incorrect password.");
    }

    // Successful login
    res.send({ username: user.name });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error during login.");
  }
});

//--------------------------------------------

let tickets = []; // In-memory storage for tickets

// Save a new ticket
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

// Get tickets for a specific user
app.get('/tickets/:username', (req, res) => {
  const userTickets = tickets.filter(ticket => ticket.username === req.params.username);
  res.json(userTickets);
});

//--------------------------------------------

app.listen(3000, () => console.log('Server is running on port 3000'));

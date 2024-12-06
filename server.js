const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

const PORT = 3000; // Port du serveur backend
const dbPath = './database.json'; // Chemin vers le fichier JSON

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Fonction pour charger la base de données
const loadDatabase = () => JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Fonction pour sauvegarder la base de données
const saveDatabase = (db) => fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

// Route pour enregistrer un utilisateur
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  const db = loadDatabase();
  if (db.users.some((user) => user.username === username)) {
    return res.status(400).json({ message: 'Utilisateur déjà existant.' });
  }

  db.users.push({ username, password, tickets: [] });
  saveDatabase(db);
  res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
});

// Route pour se connecter
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const db = loadDatabase();
  const user = db.users.find((user) => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Identifiants incorrects.' });
  }

  res.status(200).json({ message: 'Connexion réussie.', user });
});

// Route pour acheter des billets
app.post('/buy', (req, res) => {
  const { username, tickets } = req.body;

  const db = loadDatabase();
  const user = db.users.find((user) => user.username === username);

  if (!user) {
    return res.status(404).json({ message: 'Utilisateur non trouvé.' });
  }

  tickets.forEach((ticket) => {
    const existingTicket = user.tickets.find(
      (t) => t.type === ticket.type && t.category === ticket.category
    );

    if (existingTicket) {
      existingTicket.quantity += ticket.quantity;
    } else {
      user.tickets.push(ticket);
    }
  });

  saveDatabase(db);
  res.status(200).json({ message: 'Billets achetés avec succès.', tickets: user.tickets });
});

// Route pour récupérer les billets d'un utilisateur
app.get('/tickets/:username', (req, res) => {
  const { username } = req.params;

  const db = loadDatabase();
  const user = db.users.find((user) => user.username === username);

  if (!user) {
    return res.status(404).json({ message: 'Utilisateur non trouvé.' });
  }

  res.status(200).json({ tickets: user.tickets });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur Node.js démarré sur http://localhost:${PORT}`);
});

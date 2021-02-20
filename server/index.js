const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('../database/mysqlConfig');
const mongodb = require('../database/mongoConfig');

// Create server
const app = express();

// Server static files to the client
app.use(express.static(path.join(__dirname, '..', 'client/dist')));

// Middleware
app.use(bodyParser.json());

// Get mongo data
app.get('/api/mongo', (req, res) => {
  mongodb.find({})
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send(error);
    })
})
// Get mysql data
app.get('/api/mysql', (req, res) => {
  mysql.query('SELECT * FROM people', (err, results) => {
    if (err) {
      res.status(404).send(err);
      return;
    }
    res.status(200).send(results);
  })
})

// Post mongo data
app.post('/api/mongo', (req, res) => {
  const update = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
  }
  const filter = { first_name: req.body.firstName }
  const options = { new: true, upsert: true };
  mongodb.findOneAndUpdate(filter, update, options)
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
})

app.post('/api/mongo/create', (req, res) => {
  const update = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
  }
  mongodb.create(update)
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
})

// Post mysql data
app.post('/api/mysql', (req, res) => {
  const {firstName} = req.body;
  const {lastName} = req.body;
  mysql.query('INSERT INTO people (first_name, last_name) VALUES (?)', [[firstName, lastName]], (err, result) => {
    if (err) {
      res.status(404).send(err);
      return;
    }
    res.status(200).send(result);
  })
})


app.listen(3000, (err) => {
  if (err) {
    console.log(err);
    return
  }
  console.log(`server running on http://localhost:3000`);
});

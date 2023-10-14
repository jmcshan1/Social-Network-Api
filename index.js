const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = 3001;
const app = express();

const cwd = process.cwd();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const activity = cwd.includes('01-Activities')
  ? cwd.split('01-Activities')[1]
  : cwd;

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { mongoURI } = require('./config');
const books = require('./routes/books');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/books', books);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

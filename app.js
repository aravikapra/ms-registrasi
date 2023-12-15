// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Use Mahasiswa routes
app.use('/mahasiswa', mahasiswaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '..', 'src')));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'src/index.html'))
);

app.get('/api/dinos', (req, res) =>
  res.sendFile(path.join(__dirname, 'dino.json'))
);

const init = async () => {
  app.listen(port, () => {
    console.log(`App running on port: ${port}`);
  });
};

init();

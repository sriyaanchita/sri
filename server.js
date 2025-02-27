const express = require('express');
const app = express();

app.use(express.json()); // body-parser middleware
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
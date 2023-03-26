const colors = require('colors');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("mi primer respuesta desde mi API en expressJS");
});

app.listen(port, () => {
  console.log(`servidor escuchando en el puerto ${port}`.rainbow)
});
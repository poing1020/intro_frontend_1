const colors = require('colors');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("mi segunda respuesta desde mi API en expressJS");
});

app.use(express.json());
app.post('/',(req, res) => {
  const body = req.body
  console.log("recibi:", body);
  res.status(201).send();

});

app.listen(port, () => {
  console.log(`servidor escuchando en el puerto ${port}`.rainbow)
});
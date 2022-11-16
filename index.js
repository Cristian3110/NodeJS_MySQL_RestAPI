import express from 'express';

const app = express();

app.get('/employes', (req, res) => {
  res.send('Obteniendo empleados');
});

app.post('/employes', (req, res) => {
  res.send('Creando empleados');
});

app.put('/employes', (req, res) => {
  res.send('Actualizando empleados');
});

app.delete('/employes', (req, res) => {
  res.send('Eliminando empleados');
});

app.listen(3000);
console.log('Server running on port 3000');

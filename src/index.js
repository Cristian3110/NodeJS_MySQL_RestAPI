import express from 'express';
//se coloca .js xq se utiliza módulo de ES6
import { pool } from './db.js';
import employeesRoutes from './routes/employees.js';

const app = express();

app.get('/ping', async (req, res) => {
  // res.send('pong');
  const [result] = await pool.query('SELECT "pong" AS result');
  res.json(result);
});

app.use(employeesRoutes);

app.listen(3000);
console.log('Server running on port 3000');

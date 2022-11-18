import { Router } from 'express';
//se coloca .js xq se utiliza módulo de ES6
import { pool } from '../db.js';

const router = Router();

router.get('/ping', async (req, res) => {
  // res.send('pong');
  const [result] = await pool.query('SELECT "pong" AS result');
  res.json(result[0]);
});

export default router;

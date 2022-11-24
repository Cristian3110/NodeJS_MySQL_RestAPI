// se utiliza js porque se está trabajando con módulos
import { pool } from '../src/db.js';

export const getIndex = async (req, res) => {
	// res.send('pong');
	const [result] = await pool.query('SELECT "pong" AS result');
	res.json(result[0]);
};

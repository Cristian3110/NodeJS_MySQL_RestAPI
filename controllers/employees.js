/**
 * Controladores de nuestras rutas
 */

import { pool } from '../src/db.js';

export const getEmployees = async (req, res) => {
	//obteniendo todos los empleados
	const [rows] = await pool.query('SELECT * FROM employee');
	res.send({ rows });
};

export const getEmployee = async (req, res) => {
	// console.log(req.params);
	// console.log(req.params.id);
	const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id]);
	// console.log(rows);
	if (rows.length <= 0) {
		return res.status(404).json({
			msg: 'Employee not found',
		});
	} else {
		res.status(200).json({
			rows,
		});
	}
	// res.send('Obteniendo Empleado');
};

// export const createEmployee = (req, res) => {
// 	res.send('Creando empleados');
// };
export const createEmployee = async (req, res) => {
	//generando consultas SQL
	// console.log(req.body);
	const { name, salary } = req.body;
	//rows-fila
	const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUE(?,?)', [
		name,
		salary,
	]);

	// res.send('Post Success');
	// res.send({ rows});
	res.send({
		id: rows.insertId,
		name,
		salary,
	});
};

export const updateEemployee = (req, res) => {
	res.send('Actualizando empleados');
};

export const deleteEmployee = (req, res) => {
	res.send('Eliminando empleados');
};

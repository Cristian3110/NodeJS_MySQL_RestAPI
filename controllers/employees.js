/**
 * Controladores de nuestras rutas
 */

import { pool } from '../src/db.js';

export const getEmployees = async (req, res) => {
	try {
		//obteniendo todos los empleados
		const [rows] = await pool.query('SELECT * FROM employee');
		res.send({ rows });
	} catch (error) {
		return res.status(500).json({
			msg: 'something goes wrong',
		});
		console.log(error);
	}
};

export const getEmployee = async (req, res) => {
	try {
		// console.log(req.params);
		// console.log(req.params.id);
		const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [
			req.params.id,
		]);
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
	} catch (error) {
		return res.status(500).json({
			msg: 'something goes wrong',
		});
	}
};

// export const createEmployee = (req, res) => {
// 	res.send('Creando empleados');
// };
export const createEmployee = async (req, res) => {
	try {
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
	} catch (error) {
		return res.status(500).json({
			msg: 'something goes wrong',
		});
	}
};

export const deleteEmployee = async (req, res) => {
	try {
		// res.send('Eliminando empleados');
		const [ResultSetHeader] = await pool.query('DELETE FROM employee WHERE id=?', [
			req.params.id,
		]);

		if (ResultSetHeader.affectedRows <= 0) {
			res.status(404).json({
				msg: `Employee ${req.params.id} no found`,
			});
		} else {
			// res.sendStatus(204);
			// res.status(204).json({
			// 	msg: 'Employee Deleted',
			// });
			res.send('Employee Deleted');
		}
		// console.log(ResultSetHeader.affectedRows);
	} catch (error) {
		return res.status(500).json({
			msg: 'something goes wrong',
		});
	}
};

export const updateEmployee = async (req, res) => {
	try {
		// res.send('Actualizando empleados');
		//Nota: const id = req.params.id es lo mismo q lo de abajo
		const { id } = req.params;
		const { name, salary } = req.body;
		// console.log(id, name, salary);

		const [result] = await pool.query(
			'UPDATE employee SET name = ?, salary = ? WHERE id= ?',
			[name, salary, id]
		);

		if (result.affectedRows <= 0) {
			res.status(404).json({
				msg: `Employee ${id} not found and not update`,
			});
		} else {
			const [rows] = await pool.query('SELECT * FROM employee WHERE id=?', [id]);
			// para que no me muestre arrays sino el object
			res.json({
				msg: `Employee ${id} Updated`,
				Update: rows[0],
			});
			// res.json(rows[0]);
		}

		console.log(result);
	} catch (error) {
		return res.status(500).json({
			msg: 'something goes wrong',
		});
	}
};

export const updatePachtEmployee = async (req, res) => {
	try {
		// res.send('Actualizando empleados parcializados');

		const { id } = req.params;
		const { name, salary } = req.body;

		// Se utiliza IFNULL de SQL para identificar
		const [result] = await pool.query(
			'UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id= ?',
			[name, salary, id]
		);

		if (result.affectedRows <= 0) {
			res.status(404).json({
				msg: `Employee ${id} not found and not update partialed`,
			});
		} else {
			const [rows] = await pool.query('SELECT * FROM employee WHERE id=?', [id]);
			// para que no me muestre arrays sino el object
			res.json({
				msg: `Employee ${id} Updated Partialed`,
				Update: rows[0],
			});
			// res.json(rows[0]);
		}

		console.log(result);
	} catch (error) {
		return res.status(500).json({
			msg: 'something goes wrong',
		});
	}
};

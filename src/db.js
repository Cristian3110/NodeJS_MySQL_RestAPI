import { createPool } from 'mysql2/promise';

// creando la conexión a DB
export const pool = createPool({
	host: 'localhost',
	user: 'root',
	password: 'Guarenas31+',
	port: 3306,
	database: 'companydb',
});

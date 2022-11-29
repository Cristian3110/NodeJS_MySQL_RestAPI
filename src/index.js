import express from 'express';
//se coloca .js xq se utiliza módulo de ES6
import employeesRoutes from './routes/employees.js';
import indexRoutes from './routes/index.js';

import { PORT } from './config.js';

const app = express();

// con este método convertimos lo que se le pasa a las rutas con formate JSON
app.use(express.json());

app.use(indexRoutes);
app.use('/api', employeesRoutes);

app.use((req, res, next) => {
	res.status(404).json({
		msg: 'EndPoint not found',
	});
});

app.listen(PORT);
console.log('Server running on port', PORT);

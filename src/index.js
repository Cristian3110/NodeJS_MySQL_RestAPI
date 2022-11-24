import express from 'express';
//se coloca .js xq se utiliza módulo de ES6
import employeesRoutes from './routes/employees.js';
import indexRoutes from './routes/index.js';

const app = express();

// con este método convertimos lo que se le pasa a las rutas con formate JSON
app.use(express.json());

app.use(indexRoutes);
app.use(employeesRoutes);

app.listen(3000);
console.log('Server running on port 3000');

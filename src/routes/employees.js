import { Router } from 'express';
import {
	getEmployees,
	getEmployee,
	createEmployee,
	updateEmployee,
	deleteEmployee,
	updatePachtEmployee,
} from '../../controllers/employees.js';

const router = Router();

router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployee);

router.post('/employees', createEmployee);

router.put('/employees/:id', updateEmployee);

router.patch('/employees/:id', updatePachtEmployee);

router.delete('/employees/:id', deleteEmployee);

export default router;

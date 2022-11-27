import { Router } from 'express';
import {
	getEmployees,
	getEmployee,
	createEmployee,
	updateEemployee,
	deleteEmployee,
} from '../../controllers/employees.js';

const router = Router();

router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployee);

router.post('/employees', createEmployee);

router.put('/employees', updateEemployee);

router.delete('/employees/:id', deleteEmployee);

export default router;

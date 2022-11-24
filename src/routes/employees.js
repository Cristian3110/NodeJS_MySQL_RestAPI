import { Router } from 'express';
import {
	getEmployee,
	createEmployee,
	updateEemployee,
	deleteEmployee,
} from '../../controllers/employees.js';

const router = Router();

router.get('/employees', getEmployee);

router.post('/employees', createEmployee);

router.put('/employees', updateEemployee);

router.delete('/employees', deleteEmployee);

export default router;

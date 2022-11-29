import { Router } from 'express';
import { getIndex } from '../controllers/index.js';
//se coloca .js xq se utiliza módulo de ES6

const router = Router();

router.get('/ping', getIndex);

export default router;

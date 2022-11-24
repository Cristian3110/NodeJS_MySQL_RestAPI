/**
 * Controladores de nuestras rutas
 */

export const getEmployee = (req, res) => {
	res.send('Obteniendo empleados');
};

export const createEmployee = (req, res) => {
	res.send('Creando empleados');
};

export const updateEemployee = (req, res) => {
	res.send('Actualizando empleados');
};

export const deleteEmployee = (req, res) => {
	res.send('Eliminando empleados');
};

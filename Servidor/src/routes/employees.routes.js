const { Router } = require('express');
const router = Router();

const employeesCtrl = require('../controllers/employees.controllers.js');

//CRUD
//CREATE READ UPDATE DELETE

router.get('/', employeesCtrl.getEmployees);
router.post('/', employeesCtrl.createEmployee);
router.get('/:id', employeesCtrl.getEmployee);
router.put('/:id', employeesCtrl.editEmployee);
router.delete('/:id', employeesCtrl.deleteEmployee);

module.exports = router;
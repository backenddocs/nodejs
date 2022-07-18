const express = require('express');
const leaveController = require('../controllers/employee/leaveController');
const employeeController = require('../controllers/employee/employeeController');
const loginController = require('../controllers/loginController');
const router = express.Router();



router.post('/register',employeeController.register);

router.get('/fetchdata',employeeController.showData);

router.post('/login', loginController.login);

router.get('/manageleave', leaveController.manageleave);





module.exports = router;
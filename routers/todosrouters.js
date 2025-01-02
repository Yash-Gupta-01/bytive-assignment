const express = require('express');
const router = express.Router();
const todosController = require('../controllers/controller');
const auth = require('../middlewares/auth');

router.post('/tasks', auth, todosController.posttasks);
router.get('/tasks', auth, todosController.gettasks);
router.get('/tasks/:id', auth, todosController.gettaskswithid);
router.put('/tasks/:id', auth, todosController.puttaskstatusbyid);
router.delete('/tasks/:id', auth, todosController.deletetaskbyid);

module.exports=router;
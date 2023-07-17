const express = require('express');
const { createUser, loginUserController, getallUser } = require('../controller/userController');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserController);
router.get('/all-users', getallUser );
module.exports = router;
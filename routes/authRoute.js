const express = require('express');
const { createUser, loginUserController, getallUser, getUser } = require('../controller/userController');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserController);
router.get('/all-users', getallUser );
router.get("/:id", getUser );
module.exports = router;
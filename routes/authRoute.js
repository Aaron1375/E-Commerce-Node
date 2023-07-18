const express = require('express');
const { createUser, loginUserController, getallUser, getUser, deleteOneUser, updateAUser, updateOneUser } = require('../controller/userController');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserController);
router.get('/all-users', getallUser );
router.get("/:id", getUser );
router.delete("/:id", deleteOneUser );
router.put("/:id", updateOneUser );

module.exports = router;
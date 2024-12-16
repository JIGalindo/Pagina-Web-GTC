const express = require('express');
const {createUser,readUser,updateUser,deleteUser}= require('../Controller/user.controller')
const router = express.Router();

router.get('/:id', readUser);  

router.post('/',createUser);

router.put('/:id',updateUser);

router.delete('/:id', deleteUser);

module.exports = router;
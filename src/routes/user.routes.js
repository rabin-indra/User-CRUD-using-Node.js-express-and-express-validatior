const express = require("express");
const router = express.Router();
const validate = require("./../validations/validation");
const { createValidation, findOneValidation } = require("./../validations/user.validation");


const userController = require("./../controllers/user.controller");
console.log('callin api');
//to create user
router.post('/post',validate(createValidation), userController.create);

// to get the user by their id


// to get all the users
router.get('/', userController.getAll);

//to update the user by their id
router.put('/:id', userController.updateById);

// to delete the user 
router.delete('/:id', userController.deleteById);

module.exports = router;
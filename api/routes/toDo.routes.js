const express = require('express');

//CONTROLLERS
const {
    getAllToDos,
    getToDoById,
    createToDo,
    updateToDo,
    deleteToDo
} = require('../controllers/toDo.controller');

const router = express.Router();

router.get('/',getAllToDos);

router.get('/:id',getToDoById);

router.post('/',createToDo);

router.patch('/:id',updateToDo);

router.delete('/:id',deleteToDo
);

module.exports = { toDoRouter:router };
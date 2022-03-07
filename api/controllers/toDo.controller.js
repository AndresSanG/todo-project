// Models
const { ToDo } = require('../models/toDo.model');

// Utils
const { filterObj } = require('../util/filterObj');

exports.getAllToDos = async (req, res) => {
  try {
    const toDos = await ToDo.findAll({ where: { status: 'active' } });

    res.status(200).json({
      status: 'success',
      data: {
        toDos
      }
    });
  } catch (error) {
    console.log(error);
  }
};


exports.getToDoById = async (req, res) => {
  try {
    const { id } = req.params;

    
    const toDo = await ToDo.findOne({
      where: { id: id, status: 'active' }
    });

    if (!ToDo) {
      res.status(404).json({
        status: 'error',
        message: 'No todo found with the given ID'
      });
      return;
    }

    res.status(200).json({
      status: 'success',
      data: {
        toDo
      }
    });
  } catch (error) {
    console.log(error);
  }
};


exports.createToDo = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newToDo = await ToDo.create({
      title: title, // dbColumn: valueToInsert
      content: content
    });

    res.status(201).json({
      status: 'success',
      data: { newToDo }
    });
  } catch (error) {
    console.log(error);
  }
};


exports.updateToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = filterObj(req.body, 'title', 'content', 'author'); // { title } | { title, author } | { content }

    const toDo = await ToDo.findOne({
      where: { id: id, status: 'active' }
    });

    if (!toDo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant update toDo, invalid ID'
      });
      return;
    }

    await toDo.update({ ...data }); // .update({ title, author })

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};


exports.deleteToDo = async (req, res) => {
  try {
    const { id } = req.params;

    const toDo = await ToDo.findOne({
      where: { id: id, status: 'active' }
    });

    if (!toDo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant delete todo, invalid ID'
      });
      return;
    }


    await toDo.update({ status: 'deleted' });

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

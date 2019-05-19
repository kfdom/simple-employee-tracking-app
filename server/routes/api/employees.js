const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const Employee = require('../../models/Employee');

//GET ALL EMPLOYEE
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find().sort({ date: 1 });
    res.json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//GET SINGLE EMPLOYEE
router.get('/:id', async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    return res.status(404).json({ msg: 'Employee not found' });
  }

  res.json(employee);
});

//CREATE OR UPDATE EMPLOYEE
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('age', 'Age is required')
      .not()
      .isEmpty(),
    check('age', 'Please include a valid age').isInt({ gt: 0, lt: 200 }),
    check('gender', 'Gender is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, age, gender, id } = req.body;

    try {
      const employee = await Employee.findById(id);

      if (employee) {
        // Update
        const employeeFields = {};
        employeeFields.name = name;
        employeeFields.age = age;
        employeeFields.gender = gender;

        updateEmployee = await Employee.findOneAndUpdate(
          { _id: employee._id },
          { $set: employeeFields },
          { new: true }
        );

        return res.json(updateEmployee);
      }

      //Create
      let newEmployee = new Employee({
        name,
        age,
        gender
      });

      await newEmployee.save();
      return res.json(newEmployee);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

//DELETE SINGLE EMPLOYEE
router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    let employee = await Employee.findById(id);

    if (!employee) {
      return res.status(400).json({ errors: [{ msg: 'Employee not found!' }] });
    }

    Employee.deleteOne({ _id: mongoose.Types.ObjectId(id) }).exec();

    return res.json(employee._id);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
module.exports = router;

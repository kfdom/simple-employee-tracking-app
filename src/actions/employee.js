import axios from 'axios';
import {
  EMPLOYEE_LOADED,
  EMPLOYEE_LOAD_ERROR,
  DISPLAY_EDIT_EMPLOYEE,
  ADD_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_SUCCESS
} from './types';
import { setAlert } from './alert';

// Load Employee
export const loadEmployee = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5001/api/employees');

    dispatch({
      type: EMPLOYEE_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: EMPLOYEE_LOAD_ERROR
    });
  }
};

// Add Employee
export const addEmployee = ({ name, age, gender }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, age, gender });

  try {
    const res = await axios.post('http://localhost:5001/api/employees', body, config);

    dispatch(setAlert('Employee successfully created', 'success'));
    dispatch({
      type: ADD_EMPLOYEE_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch(loadEmployee());
  }
};

// Update Employee
export const updateEmployee = ({ name, age, gender, id }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, age, gender, id });

  try {
    const res = await axios.post('http://localhost:5001/api/employees', body, config);

    dispatch(setAlert('Employee successfully updated', 'success'));

    dispatch(loadEmployee());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch(loadEmployee());
  }
};

// Delete Employee
export const deleteEmployee = id => async dispatch => {
  try {
    const res = await axios.delete(`http://localhost:5001/api/employees/${id}`);

    dispatch(setAlert('Employee successfully deleted', 'success'));
    dispatch({
      type: DELETE_EMPLOYEE_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch(loadEmployee());
  }
};

// Load Edit Employee Row
export const loadEditEmployee = id => dispatch => {
  dispatch({
    type: DISPLAY_EDIT_EMPLOYEE,
    payload: id
  });
};

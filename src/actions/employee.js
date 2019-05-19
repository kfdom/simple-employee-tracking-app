import axios from 'axios';
import { EMPLOYEE_LOADED, EMPLOYEE_LOAD_ERROR, DISPLAY_EDIT_EMPLOYEE } from './types';
import { setAlert } from './alert';

// Load Employee
export const loadEmployee = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5001/api/employees');

    console.log('RES', res.data);

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
export const addEmployee = ({ name, age }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, age });

  try {
    const res = await axios.post('http://localhost:5001/api/employees', body, config);

    dispatch(setAlert('Employee successfully created', 'success'));
    dispatch(loadEmployee());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch(loadEmployee());
  }
};

// Update Employee
export const updateEmployee = ({ name, age, id }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, age, id });

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
    await axios.delete(`http://localhost:5001/api/employees/${id}`);

    dispatch(setAlert('Employee successfully deleted', 'success'));
    dispatch(loadEmployee());
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

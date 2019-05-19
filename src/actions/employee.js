import axios from 'axios';
import { EMPLOYEE_LOADED, EMPLOYEE_LOAD_ERROR } from './types';
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
    //dispatch(reset('addForm'));
    dispatch(loadEmployee());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch(loadEmployee());
  }
};

// Add Employee
export const updateEmployee = ({ name, age, id }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, age, id });

  try {
    const res = await axios.post('http://localhost:5001/api/employees', body, config);

    //dispatch(setAlert('Employee successfully updated', 'success'));

    dispatch(loadEmployee());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch(loadEmployee());
  }
};

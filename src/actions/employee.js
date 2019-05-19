import axios from 'axios';
import { EMPLOYEE_LOADED, EMPLOYEE_LOAD_ERROR } from './types';

// Load Employee
export const loadEmployee = () => async dispatch => {
  try {
    const res = await axios.get('/api/employees');

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

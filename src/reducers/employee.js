import { EMPLOYEE_LOADED, EMPLOYEE_LOAD_ERROR, DISPLAY_EDIT_EMPLOYEE } from '../actions/types';

const initialState = {
  loading: true,
  employeeList: [],
  displayEditEmployee: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case EMPLOYEE_LOADED:
      return {
        ...state,
        loading: false,
        employeeList: payload,
        displayEditEmployee: null
      };
    case EMPLOYEE_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        employeeList: []
      };
    case DISPLAY_EDIT_EMPLOYEE:
      return {
        ...state,
        displayEditEmployee: payload
      };
    default:
      return state;
  }
}

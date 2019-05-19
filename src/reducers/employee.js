import { EMPLOYEE_LOADED, EMPLOYEE_LOAD_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  employeeList: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case EMPLOYEE_LOADED:
      return {
        ...state,
        loading: false,
        employeeList: payload
      };
    case EMPLOYEE_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        employeeList: []
      };
    default:
      return state;
  }
}

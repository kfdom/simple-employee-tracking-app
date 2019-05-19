import {
  EMPLOYEE_LOADED,
  EMPLOYEE_LOAD_ERROR,
  DISPLAY_EDIT_EMPLOYEE,
  ADD_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_SUCCESS
} from '../actions/types';

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
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        employeeList: [...state.employeeList, payload],
        displayEditEmployee: null
      };
    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        employeeList: state.employeeList.filter(function(employee) {
          return employee._id !== action.payload;
        }),
        displayEditEmployee: null
      };
    default:
      return state;
  }
}

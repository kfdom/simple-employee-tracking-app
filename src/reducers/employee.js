import {
  EMPLOYEE_LOADED,
  EMPLOYEE_LOAD_ERROR,
  DISPLAY_EDIT_EMPLOYEE,
  ADD_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_SUCCESS,
  SEARCH_EMPLOYEE,
  SHOW_ADD_PANEL,
  HIDE_ADD_PANEL
} from '../actions/types';

const initialState = {
  loading: true,
  employeeList: [],
  displayEditEmployee: null,
  displayAddPanel: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case EMPLOYEE_LOADED: //Load All Employees
      return {
        ...state,
        loading: false,
        employeeList: payload,
        displayEditEmployee: null
      };
    case EMPLOYEE_LOAD_ERROR: //Error when loading employees
      return {
        ...state,
        loading: false,
        employeeList: []
      };
    case DISPLAY_EDIT_EMPLOYEE: //Display editable row for modification
      return {
        ...state,
        displayEditEmployee: payload
      };
    case ADD_EMPLOYEE_SUCCESS: //Successfully added a employee
      return {
        ...state,
        loading: false,
        employeeList: [...state.employeeList, payload],
        displayEditEmployee: null
      };
    case DELETE_EMPLOYEE_SUCCESS: //Successfully deleted a employee
      return {
        ...state,
        loading: false,
        employeeList: state.employeeList.filter(function(employee) {
          return employee._id !== action.payload;
        }),
        displayEditEmployee: null
      };
    case SEARCH_EMPLOYEE: // Search Employee by different criteria
      let newEmployeeList = state.employeeList;
      if (action.payload.name !== '') {
        newEmployeeList = newEmployeeList.filter(
          employee => employee.name.toLowerCase().indexOf(action.payload.name.toLowerCase()) >= 0
        );
      }
      if (action.payload.gender !== '') {
        newEmployeeList = newEmployeeList.filter(function(employee) {
          return employee.gender === action.payload.gender;
        });
      }
      if (action.payload.ageFrom !== '') {
        newEmployeeList = newEmployeeList.filter(function(employee) {
          return employee.age >= action.payload.ageFrom;
        });
      }
      if (action.payload.ageTo !== '') {
        newEmployeeList = newEmployeeList.filter(function(employee) {
          return employee.age <= action.payload.ageTo;
        });
      }
      return {
        ...state,
        loading: false,
        employeeList: newEmployeeList
      };
    case SHOW_ADD_PANEL: // show add employee panel
      return {
        ...state,
        displayAddPanel: true
      };
    case HIDE_ADD_PANEL: // hide add employee panel
      return {
        ...state,
        displayAddPanel: false
      };
    default:
      return state;
  }
}

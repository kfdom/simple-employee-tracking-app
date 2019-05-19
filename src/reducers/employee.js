import { USER_LOADED, USER_LOAD_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  employeeList: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        // ...state,
        loading: false,
        employeeList: payload
      };
    case USER_LOAD_ERROR:
      return {
        // ...state,
        loading: false,
        employeeList: []
      };
    default:
      return state;
  }
}

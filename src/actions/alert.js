import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

//Set Alert for error and success messages
export const setAlert = (msg, alertType, timeout = 10000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

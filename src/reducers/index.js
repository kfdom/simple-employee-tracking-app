import { combineReducers } from 'redux';
import employee from './employee';
import alert from './alert';

export default combineReducers({
  employee,
  alert
});

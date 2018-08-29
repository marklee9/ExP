import {combineReducers} from 'redux';
import EmployeeReducer from './employee_reducer';
import AuthReducer from "./auth_reducer";
import TaskReducer from './task_reducer';

export default combineReducers({
  employees: EmployeeReducer,
  tokens: AuthReducer,
  tasks: TaskReducer
});
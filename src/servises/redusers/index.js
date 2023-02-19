import { combineReducers } from 'redux';
import { tasksReducer } from './tasks-detail';



export const rootReducer = combineReducers({
  tasksArray: tasksReducer,
  // order: orderReducer,
  // burgerConstructorItem: constructorReducer,
  // ingredientsModal: reducerDetailModal,
  // user: authReducer
});
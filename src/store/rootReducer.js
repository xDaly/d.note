import { combineReducers } from 'redux';
import notesReducer from './reducers/noteSlice';

const rootReducer = combineReducers({
  notes: notesReducer
});

export default rootReducer;
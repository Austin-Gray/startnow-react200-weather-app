import { combineReducers } from 'redux';
import selectionReducer from './components/Selection/selectionReducers';

const rootReducer = combineReducers({
    selection: selectionReducer
});

export default rootReducer;

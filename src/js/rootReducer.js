import { combineReducers } from 'redux';
import selectionReducer from './js/components/Selection/selectionReducers';

const rootReducer = combineReducers({
    selection: selectionReducer
});

export default rootReducer;

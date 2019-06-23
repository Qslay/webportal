import {
    combineReducers
} from 'redux';
import reducer1 from './reducer1.js';
import menuReducer from './menuReducer.js';

export default combineReducers({
    actionSet1: reducer1,
    menuActions : menuReducer
});
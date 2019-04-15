import {
    combineReducers
} from 'redux';
import reducer1 from './reducer1.js';

export default combineReducers({
    actionSet1: reducer1
});
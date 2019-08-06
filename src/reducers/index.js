import { combineReducers } from 'redux';
import { queries } from './queries';
import { especialist } from './especialist';

export const Reducers = combineReducers({
    queries, 
    especialist
});
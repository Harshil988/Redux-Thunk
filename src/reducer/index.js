import { combineReducers } from 'redux';
import apiData from './apiData'; 
export default combineReducers ({

	posts: apiData, 
	
});
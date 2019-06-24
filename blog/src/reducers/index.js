import { combineReducers } from 'redux';
import postReducer from './postReducer.js';
import usersReducer from './usersReducer.js';

/* 					Reducer Rules
/* - Must return any value besides 'undefined'
/* - Produces 'state', or data to be used inside of your app 
/* 	 using only previous state and the action
/* - Must not return reach 'out of itself' to decide what value to return (reducers are pure)
/* - Must not mutate its input 'state' argument
*/

export default combineReducers({
	posts: postReducer,
	users: usersReducer
});
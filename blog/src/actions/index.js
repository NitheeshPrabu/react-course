import JSONPlaceholder from '../api/JSONPlaceholder';
import _ from 'lodash';

//DON'T DO THIS
//Action Creators need to always return an object. But below code will not always
//return an object (sometimes returns a function)
// export const fetchPosts = async () => {
// 	const response = await JSONPlaceholder.get('/posts');

// 	return {
// 		type: 'FETCH_POSTS',
// 		payload: response
// 	}
// }

export const fetchPosts = () => {
	return async (dispatch) => {
		const response = await JSONPlaceholder.get('/posts');

		dispatch({ type: 'FETCH_POSTS', payload: response.data });
	};
};

//makes multiple calls for each user
// export const fetchUserById = (userId) => {
// 	return async (dispatch) => {
// 		const response = await JSONPlaceholder.get(`/users/${userId}`);

// 		dispatch({type: 'FETCH_USER_BY_ID', payload: response.data});
// 	}
// }

//Uses lodash memoize to reduce number of calls
//Unable to refetch user if changes made
// export const fetchUserById = (userId) => (dispatch) => {
// 	_fetchUser(userId, dispatch);
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await JSONPlaceholder.get(`/users/${id}`);

// 	dispatch({ type: 'FETCH_USER_BY_ID', payload: response.data });
// });


//ES2015 Syntax
export const fetchUserById = id => async dispatch => {
	const response = await JSONPlaceholder.get(`/users/${id}`);

	dispatch({type: 'FETCH_USER_BY_ID', payload: response.data});
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());	//need to dispatch when calling action creator
	
	// const userIds = _.uniq(_.map(getState().posts, 'userId'));	//lodash to find unique userIds
	// userIds.forEach(id => dispatch(fetchUserById(id)));

	//Using lodash for above steps
	_.chain(getState().posts)
		.map()
		.uniq()
		.forEach(id => dispatch(fetchUserById(id)))
		.value();
}
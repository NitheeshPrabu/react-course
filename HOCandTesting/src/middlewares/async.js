/**
 * Signature of middleware must have a root function (takes store as argument),
 * that returns a function (takes next as argument),
 * that returns another function (takes action as argument)
 *
 * store: The redux store.
 * next: This function is to be called when our middleware is done with
 * 			 the task assigned to do. This sends our actions to our reducer
 * 			 or another middleware.
 * action: The action currently being dispatched.
 *
 *
 * This middleware is responsible for handling actions that return a promise.
 * If actions have a promise, wait for it to resolve and then send the result
 * back.
 */
export default ({ dispatch }) => next => action => {
  if (!action.payload || !action.payload.then) {
    // we don't care about this action, forward to other middleware
    return next(action);
  }

  action.payload.then(response => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};

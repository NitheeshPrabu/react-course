import tv4 from 'tv4';
import stateSchema from 'middlewares/stateSchema';

export default ({ dispatch, getState }) => next => action => {
  next(action);
  const state = getState();

  if (!tv4.validate(state, stateSchema)) {
    console.warn('Invalid state!!!');
  }
};

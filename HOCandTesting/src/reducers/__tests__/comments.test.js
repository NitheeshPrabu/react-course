import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('should handle actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New comment'
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(['New comment']);
});

it('should handle actions with unknown type', () => {
  const newState = commentsReducer([], { type: 'UNKNOWN_TYPE' });
  expect(newState).toEqual([]);
});

import { handleActions } from 'redux-actions';
import { INSERT_USER } from './../constants/index';

export const users = handleActions({
    [INSERT_USER]: (state, action) => [ ...state, action.payload ],
}, []);


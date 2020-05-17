import { createAction } from 'redux-actions';
import { INSERT_USER } from './../../constants/index';
import { apiPost } from './../../api';
import { urlUsers } from './../../api/urls';

export const insertUser = createAction(INSERT_USER, 
    user => apiPost(urlUsers, user)() );
import { createAction } from '@ngrx/store';
import { ActionType } from '../actionTypes';

export const logOutAction = createAction(ActionType.LOGOUT);

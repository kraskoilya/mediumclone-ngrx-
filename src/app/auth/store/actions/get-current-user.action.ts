import { createAction, props } from '@ngrx/store';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { ActionType } from './../actionTypes';

export const getCurrentUserAction = createAction(ActionType.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  ActionType.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const getCurrentUserFailureAction = createAction(
  ActionType.GET_CURRENT_USER_FAILURE
);

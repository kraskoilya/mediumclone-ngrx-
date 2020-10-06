import { createAction, props } from '@ngrx/store';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { BackendErrorsInterface } from '../../types/backend-errors.interface';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { ActionType } from './../actionTypes';

export const loginAction = createAction(
  ActionType.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionType.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  ActionType.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);

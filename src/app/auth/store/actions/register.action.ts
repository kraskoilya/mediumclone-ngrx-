import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { BackendErrorsInterface } from '../../types/backend-errors.interface';
import { ActionType } from './../actionTypes';

export const registerAction = createAction(
  ActionType.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionType.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const registerFailureAction = createAction(
  ActionType.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);

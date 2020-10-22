import { createAction, props } from '@ngrx/store';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { BackendErrorsInterface } from '../../types/backend-errors.interface';
import { CurrentUserInputInterface } from './../../../shared/types/current-user-input';
import { ActionType } from './../actionTypes';

export const UpdateCurrentUserAction = createAction(
  ActionType.UPDATE_CURRENT_USER,
  props<{ currentUserInput: CurrentUserInputInterface }>()
);

export const UpdateCurrentUserSuccessAction = createAction(
  ActionType.UPDATE_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const UpdateCurrentUserFailureAction = createAction(
  ActionType.UPDATE_CURRENT_USER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);

import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { ActionType } from './../actionTypes';

export const registerAction = createAction(
  ActionType.REGISTER,
  props<RegisterRequestInterface>()
);

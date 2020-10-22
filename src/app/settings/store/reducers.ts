import { Action, createReducer, on } from '@ngrx/store';
import {
  UpdateCurrentUserAction,
  UpdateCurrentUserFailureAction,
  UpdateCurrentUserSuccessAction,
} from './../../auth/store/actions/updateCurrentUser.action';
import { SettingsStateInterface } from './types/settingsState.interface';

const initialState: SettingsStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const settingReducer = createReducer(
  initialState,
  on(
    UpdateCurrentUserAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    UpdateCurrentUserSuccessAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    UpdateCurrentUserFailureAction,
    (state, action): SettingsStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: SettingsStateInterface, action: Action) {
  return settingReducer(state, action);
}

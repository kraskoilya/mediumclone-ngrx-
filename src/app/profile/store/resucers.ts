import { Action, createReducer, on } from '@ngrx/store';
import { ProfileStateInterface } from './../types/profile-state-interface';
import {
  getProfileAction,
  getProfileActionFailure,
  getProfileActionSuccess,
} from './actions/getProfile.action';

const initialState: ProfileStateInterface = {
  isLoading: false,
  data: null,
  error: null,
};

const profileReducer = createReducer(
  initialState,
  on(
    getProfileAction,
    (state): ProfileStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getProfileActionSuccess,
    (state, action): ProfileStateInterface => ({
      ...state,
      isLoading: false,
      data: action.profile,
    })
  ),
  on(
    getProfileActionFailure,
    (state): ProfileStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: ProfileStateInterface, action: Action) {
  return profileReducer(state, action);
}

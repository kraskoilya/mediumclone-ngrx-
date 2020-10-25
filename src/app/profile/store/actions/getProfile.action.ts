import { createAction, props } from '@ngrx/store';
import { ProfileInterface } from './../../../shared/types/profile.interface';
import { ActionTypes } from './../actionTypes';

export const getProfileAction = createAction(
  ActionTypes.GET_PROFILE,
  props<{ slug: string }>()
);

export const getProfileActionSuccess = createAction(
  ActionTypes.GET_PROFILE_SUCCESS,
  props<{ profile: ProfileInterface }>()
);

export const getProfileActionFailure = createAction(
  ActionTypes.GET_PROFILE_FAILURE
);

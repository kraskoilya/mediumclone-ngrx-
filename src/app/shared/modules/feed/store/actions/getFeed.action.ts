import { createAction, props } from '@ngrx/store';
import { GetFeedResponceInterface } from './../../types/getFeedResponce.interface';
import { ActionType } from './../actionTypes';

export const getFeedAction = createAction(
  ActionType.GET_FEED,
  props<{ url: string }>()
);

export const getFeedSuccessAction = createAction(
  ActionType.GET_FEED_SUCCESS,
  props<{ feed: GetFeedResponceInterface }>()
);

export const getFeedFailureAction = createAction(ActionType.GET_FEED_FAILURE);

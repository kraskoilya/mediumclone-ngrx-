import { createAction, props } from '@ngrx/store';
import { GetPopularTagResponceInterface } from '../../types/get-popular-tag-responce';
import { ActionType } from '../actionTypes';

export const getPopularTags = createAction(
  ActionType.GET_POPULAR_TAGS,
  props<{ url: string }>()
);

export const getPopularTagsSuccess = createAction(
  ActionType.GET_POPULAR_TAGS_SUCCESS,
  props<{ tags: GetPopularTagResponceInterface }>()
);

export const getPopularTagsFailure = createAction(
  ActionType.GET_POPULAR_TAGS_FAILURE
);

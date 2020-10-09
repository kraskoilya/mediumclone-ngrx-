import { Action, createReducer, on } from '@ngrx/store';
import { PopularTagsStateInterface } from '../types/popularTagsState';
import {
  getPopularTags,
  getPopularTagsFailure,
  getPopularTagsSuccess,
} from './actions/getPopularTags.action';

export const initialState: PopularTagsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const popularTagsReducer = createReducer(
  initialState,
  on(getPopularTags, (state: PopularTagsStateInterface) => ({
    ...state,
    isLoading: true,
  })),
  on(
    getPopularTagsSuccess,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.tags,
    })
  ),
  on(
    getPopularTagsFailure,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action);
}

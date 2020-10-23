import { Action, createReducer, on } from '@ngrx/store';
import { LikeArticleStateInterface } from '../types/like-article-state-interface';
import { DislikeArticleSuccessAction } from './actions/dislikeArticle.action';
import {
  LikeArticleAction,
  LikeArticleFailureAction,
  LikeArticleSuccessAction,
} from './actions/likeArticle.action';

const initialState: LikeArticleStateInterface = {
  isSubmitting: false,
  data: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    LikeArticleAction,
    (state): LikeArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    LikeArticleSuccessAction,
    (state, action): LikeArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      data: action.article,
    })
  ),
  on(
    LikeArticleFailureAction,
    (state): LikeArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    DislikeArticleSuccessAction,
    (state, action): LikeArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      data: action.article,
    })
  )
  // on(routerNavigationAction, (): LikeArticleStateInterface => initialState)
);

export function reducers(state: LikeArticleStateInterface, action: Action) {
  return feedReducer(state, action);
}

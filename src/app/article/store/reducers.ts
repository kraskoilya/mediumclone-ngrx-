import { routerNavigationAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';
import { ArticleStateInterface } from '../types/article-state';
import {
  deleteArticleAction,
  deleteArticleFailureAction,
  deleteArticleSuccessAction,
} from './actions/deleteArticle.action';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/getArticle.action';

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): ArticleStateInterface => initialState),
  // delete article
  on(
    deleteArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    deleteArticleSuccessAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: null,
    })
  ),
  on(
    deleteArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action);
}

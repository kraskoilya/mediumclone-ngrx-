import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actionTypes';
import { ArticleInterface } from './../../../types/article.interface';

export const LikeArticleAction = createAction(
  ActionType.LIKE_ARTICLE,
  props<{ slug: string; isLoggedIn: boolean }>()
);

export const LikeArticleSuccessAction = createAction(
  ActionType.LIKE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const LikeArticleFailureAction = createAction(
  ActionType.LIKE_ARTICLE_FAILURE
);

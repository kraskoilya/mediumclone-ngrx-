import { createAction, props } from '@ngrx/store';
import { ArticleInterface } from '../../../types/article.interface';
import { ActionType } from '../actionTypes';

export const DislikeArticleAction = createAction(
  ActionType.DISLIKE_ARTICLE,
  props<{ slug: string; isLoggedIn: boolean }>()
);

export const DislikeArticleSuccessAction = createAction(
  ActionType.DISLIKE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const DislikeArticleFailureAction = createAction(
  ActionType.DISLIKE_ARTICLE_FAILURE
);

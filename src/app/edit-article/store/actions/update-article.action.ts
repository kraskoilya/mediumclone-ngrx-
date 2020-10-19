import { createAction, props } from '@ngrx/store';
import { BackendErrorsInterface } from 'src/app/auth/types/backend-errors.interface';
import { ActionType } from '../actionTypes';
import { ArticleInputInterface } from './../../../shared/types/article-input';
import { ArticleInterface } from './../../../shared/types/article.interface';

export const updateArticleAction = createAction(
  ActionType.UPDATE_ARTICLE,
  props<{ slug: string; articleInput: ArticleInputInterface }>()
);

export const updateArticleSuccessAction = createAction(
  ActionType.UPDATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const updateArticleFailureAction = createAction(
  ActionType.UPDATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);

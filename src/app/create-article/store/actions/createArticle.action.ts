import { createAction, props } from '@ngrx/store';
import { BackendErrorsInterface } from 'src/app/auth/types/backend-errors.interface';
import { ActionType } from '../actionTypes';
import { ArticleInputInterface } from './../../../shared/types/article-input';
import { ArticleInterface } from './../../../shared/types/article.interface';

export const createArticleAction = createAction(
  ActionType.CREATE_ARTICLE,
  props<{ articleInput: ArticleInputInterface }>()
);

export const createArticleSuccessAction = createAction(
  ActionType.CREATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const createArticleFailureAction = createAction(
  ActionType.CREATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);

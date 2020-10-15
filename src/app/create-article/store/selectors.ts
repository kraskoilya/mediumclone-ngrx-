import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { CreateArticleStateInterface } from './../types/createArticleState.interface';

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CreateArticleStateInterface
>('createArticle');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (createArticle: CreateArticleStateInterface) => createArticle.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (createArticle: CreateArticleStateInterface) => createArticle.validationErrors
);

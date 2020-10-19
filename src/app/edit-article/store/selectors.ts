import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { EditArticleStateInterface } from './../types/edit-article-state';

export const EditArticleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  EditArticleStateInterface
>('editArticle');

export const isSubmittingSelector = createSelector(
  EditArticleFeatureSelector,
  (editArticle: EditArticleStateInterface) => editArticle.isSubmitting
);

export const validationErrorsSelector = createSelector(
  EditArticleFeatureSelector,
  (editArticle: EditArticleStateInterface) => editArticle.validationErrors
);

export const articleSelector = createSelector(
  EditArticleFeatureSelector,
  (editArticle: EditArticleStateInterface) => editArticle.article
);

export const isLoadingSelector = createSelector(
  EditArticleFeatureSelector,
  (editArticle: EditArticleStateInterface) => editArticle.isLoading
);

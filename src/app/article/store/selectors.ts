import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ArticleStateInterface } from './../types/article-state';

export const feedFeatureSelector = createFeatureSelector<
  AppStateInterface,
  ArticleStateInterface
>('article');

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.isLoading
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.error
);

export const articleSelector = createSelector(
  feedFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.data
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from './../../types/appState.interface';
import { LikeArticleStateInterface } from './../types/like-article-state-interface';

export const articleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  LikeArticleStateInterface
>('likeArticle');

export const likeArticleSelector = createSelector(
  articleFeatureSelector,
  (likeArticle: LikeArticleStateInterface) => likeArticle.data
);

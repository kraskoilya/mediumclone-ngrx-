import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ProfileStateInterface } from './../types/profile-state-interface';

export const profileFeatureSelector = createFeatureSelector<
  AppStateInterface,
  ProfileStateInterface
>('profile');

export const isLoadingSelector = createSelector(
  profileFeatureSelector,
  (profileState: ProfileStateInterface) => profileState.isLoading
);

export const errorSelector = createSelector(
  profileFeatureSelector,
  (profileState: ProfileStateInterface) => profileState.error
);

export const profileSelector = createSelector(
  profileFeatureSelector,
  (profileState: ProfileStateInterface) => profileState.data
);

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PopularTagsService } from '../../services/popular-tags.service';
import { GetPopularTagResponceInterface } from '../../types/get-popular-tag-responce';
import { getPopularTags } from '../actions/getPopularTags.action';
import {
  getPopularTagsFailure,
  getPopularTagsSuccess,
} from './../actions/getPopularTags.action';

@Injectable()
export class PopularTagsEffects {
  popularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTags),
      switchMap(({ url }) => {
        return this.popularTagsService.getPopularTags(url).pipe(
          map((tags: GetPopularTagResponceInterface) => {
            return getPopularTagsSuccess({ tags });
          }),
          catchError(() => {
            return of(getPopularTagsFailure());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}
}

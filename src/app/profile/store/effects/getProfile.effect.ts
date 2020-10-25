import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProfileService } from '../../services/profile.service';
import { ProfileInterface } from './../../../shared/types/profile.interface';
import {
  getProfileAction,
  getProfileActionFailure,
  getProfileActionSuccess,
} from './../actions/getProfile.action';

@Injectable()
export class GetProfileEffect {
  getProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProfileAction),
      switchMap(({ slug }) => {
        return this.profileService.getProfile(slug).pipe(
          map((profile: ProfileInterface) => {
            return getProfileActionSuccess({ profile });
          }),
          catchError(() => {
            return of(getProfileActionFailure());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}
}

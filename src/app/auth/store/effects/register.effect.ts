import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import {
  registerAction,
  registerFailureAction,
} from '../actions/register.action';
import { AuthService } from './../../services/auth.service';
import { registerSuccessAction } from './../actions/register.action';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token);
            return registerSuccessAction({ currentUser });
          }),
          catchError((errorsResponce: HttpErrorResponse) => {
            return of(
              registerFailureAction({ errors: errorsResponce.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}

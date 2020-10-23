import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ArticleService } from 'src/app/shared/services/article.service';
import { ArticleInterface } from '../../../types/article.interface';
import {
  DislikeArticleAction,
  DislikeArticleFailureAction,
  DislikeArticleSuccessAction,
} from './../actions/dislikeArticle.action';

@Injectable()
export class DislikeArticleEffect {
  dislikeArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DislikeArticleAction),
      switchMap(({ slug, isLoggedIn }) => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
          return of(DislikeArticleFailureAction());
        }
        return this.articleService.dislikeArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return DislikeArticleSuccessAction({ article });
          }),
          catchError(() => {
            return of(DislikeArticleFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private router: Router
  ) {}
}

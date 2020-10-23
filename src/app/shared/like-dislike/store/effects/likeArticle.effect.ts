import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ArticleService } from 'src/app/shared/services/article.service';
import { LikeArticleAction } from '../actions/likeArticle.action';
import { ArticleInterface } from './../../../types/article.interface';
import {
  LikeArticleFailureAction,
  LikeArticleSuccessAction,
} from './../actions/likeArticle.action';

@Injectable()
export class LikeArticleEffect {
  likeArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LikeArticleAction),
      switchMap(({ slug, isLoggedIn }) => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
          return of(LikeArticleFailureAction());
        }
        return this.articleService.likeArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return LikeArticleSuccessAction({ article });
          }),
          catchError(() => {
            return of(LikeArticleFailureAction());
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

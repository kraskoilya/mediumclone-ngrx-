import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ArticleInterface } from './../../../types/article.interface';
import { DislikeArticleAction } from './../../store/actions/dislikeArticle.action';
import { LikeArticleAction } from './../../store/actions/likeArticle.action';
import { likeArticleSelector } from './../../store/selectors';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.scss'],
})
export class LikeDislikeComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('article') articleProps: ArticleInterface;
  // tslint:disable-next-line:no-input-rename
  @Input('isLoggedIn') isLoggedInProps: boolean;

  articleSubscription: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  submit() {
    if (!this.articleProps.favorited) {
      this.like();
    } else {
      this.dislike();
    }
  }

  private like() {
    console.log('like');
    this.store.dispatch(
      LikeArticleAction({
        slug: this.articleProps.slug,
        isLoggedIn: this.isLoggedInProps,
      })
    );
  }

  private dislike() {
    console.log('dislike');
    this.store.dispatch(
      DislikeArticleAction({
        slug: this.articleProps.slug,
        isLoggedIn: this.isLoggedInProps,
      })
    );
  }

  private initializeListeners(): void {
    this.articleSubscription = this.store
      .pipe(select(likeArticleSelector), filter(Boolean))
      .subscribe((article: ArticleInterface | null) => {
        if (article.slug === this.articleProps.slug) {
          this.articleProps = article;
        }
      });
  }
}

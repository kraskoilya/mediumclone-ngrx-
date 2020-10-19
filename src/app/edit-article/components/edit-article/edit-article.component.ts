import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { BackendErrorsInterface } from 'src/app/auth/types/backend-errors.interface';
import { getArticleAction } from '../../store/actions/get-article.action';
import {
  articleSelector,
  isLoadingSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { ArticleInputInterface } from './../../../shared/types/article-input';
import { ArticleInterface } from './../../../shared/types/article.interface';
import { updateArticleAction } from './../../store/actions/update-article.action';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  slug: string;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  initialValues$: Observable<ArticleInputInterface>;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  onSubmit(articleInput: ArticleInterface): void {
    this.store.dispatch(updateArticleAction({ slug: this.slug, articleInput }));
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      // фильтрует все null or undefined
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        };
      })
    );
  }

  private fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }
}

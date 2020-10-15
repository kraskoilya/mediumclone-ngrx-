import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from 'src/app/auth/types/backend-errors.interface';
import { ArticleInputInterface } from 'src/app/shared/types/article-input';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { ArticleInterface } from './../../../shared/types/article.interface';
import { createArticleAction } from './../../store/actions/createArticle.action';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    body: null,
    title: null,
    description: null,
    tagList: [],
  };
  backendErrors$: Observable<BackendErrorsInterface | null>;
  isSubmitting$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(articleInput: ArticleInterface): void {
    this.store.dispatch(createArticleAction({ articleInput }));
  }
}

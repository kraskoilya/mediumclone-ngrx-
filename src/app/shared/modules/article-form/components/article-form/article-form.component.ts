import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticleInputInterface } from 'src/app/shared/types/article-input';
import { BackendErrorsInterface } from './../../../../../auth/types/backend-errors.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('initialValues') initialValuesProps: ArticleInputInterface;
  // tslint:disable-next-line:no-input-rename
  @Input('isSubmitting') isSubmittingProps: boolean;
  // tslint:disable-next-line:no-input-rename
  @Input('errors') errorProps: BackendErrorsInterface | null;

  // tslint:disable-next-line:no-output-rename
  @Output('articleSubmit') articleSubmitEvent = new EventEmitter<
    ArticleInputInterface
  >();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      description: this.initialValuesProps.description,
      body: this.initialValuesProps.body,
      tagList: this.initialValuesProps.tagList.join(' '),
    });
  }
}

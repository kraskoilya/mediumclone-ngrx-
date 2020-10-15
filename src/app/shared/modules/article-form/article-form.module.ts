import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessageModule } from '../backend-error-message/backend-error-message.module';
import { ArticleFormComponent } from './components/article-form/article-form.component';

@NgModule({
  declarations: [ArticleFormComponent],
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessageModule],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { CreateArticleRoutingModule } from './create-article-routing.module';
import { CreateArticleService } from './services/create-article.service';
import { CreateArticleEffect } from './store/effects/createArticle.effect';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    CreateArticleRoutingModule,
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers),
  ],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}

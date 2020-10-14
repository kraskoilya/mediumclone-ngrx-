import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { TagListModule } from '../shared/modules/tag-list/tag-list.module';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './components/article/article.component';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
  ],
})
export class ArticleModule {}

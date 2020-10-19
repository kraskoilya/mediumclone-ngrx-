import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { EditArticleRoutingModule } from './edit-article-routing.module';
import { EditArticleService } from './services/edit-article.service';
import { GetArticleEffect } from './store/effects/getArticle.effecty';
import { UpdateArticleEffect } from './store/effects/updateArticle.effect';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    EditArticleRoutingModule,
    ArticleFormModule,
    LoadingModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
  ],
  providers: [EditArticleService],
})
export class EditArticleModule {}

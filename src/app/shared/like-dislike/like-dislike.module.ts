import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LikeDislikeComponent } from './components/like-dislike/like-dislike.component';
import { DislikeArticleEffect } from './store/effects/dislikeArticle.effect';
import { LikeArticleEffect } from './store/effects/likeArticle.effect';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [LikeDislikeComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([LikeArticleEffect, DislikeArticleEffect]),
    StoreModule.forFeature('likeArticle', reducers),
  ],
  exports: [LikeDislikeComponent],
})
export class LikeDislikeModule {}

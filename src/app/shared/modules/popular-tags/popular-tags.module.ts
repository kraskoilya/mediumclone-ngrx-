import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading/loading.module';
import { PopularTagComponent } from './components/popular-tag/popular-tag.component';
import { PopularTagsService } from './services/popular-tags.service';
import { PopularTagsEffects } from './store/effects/popularTags.effect';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [PopularTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    EffectsModule.forFeature([PopularTagsEffects]),
    StoreModule.forFeature('tags', reducers),
  ],
  exports: [PopularTagComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}

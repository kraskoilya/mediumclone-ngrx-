import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileService } from './services/profile.service';
import { GetProfileEffect } from './store/effects/getProfile.effect';
import { reducers } from './store/resucers';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    EffectsModule.forFeature([GetProfileEffect]),
    StoreModule.forFeature('profile', reducers),
    FeedModule,
  ],
  providers: [ProfileService],
})
export class ProfileModule {}

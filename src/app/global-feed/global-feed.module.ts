import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { GlobalFeedRoutingModule } from './global-feed-routing.module';

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [CommonModule, GlobalFeedRoutingModule, FeedModule],
})
export class GlobalFeedModule {}

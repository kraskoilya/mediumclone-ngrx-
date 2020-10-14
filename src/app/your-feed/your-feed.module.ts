import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedToggleModule } from '../shared/modules/feed-toggle/feed-toggle.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { YourFeedComponent } from './components/your-feed/your-feed.component';
import { YourFeedRoutingModule } from './your-feed-routing.module';

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    YourFeedRoutingModule,
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedToggleModule,
  ],
})
export class YourFeedModule {}

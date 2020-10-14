import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedToggleModule } from '../shared/modules/feed-toggle/feed-toggle.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import { TagFeedRoutingModule } from './tag-feed-routing.module';

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    TagFeedRoutingModule,
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedToggleModule,
  ],
})
export class TagFeedModule {}

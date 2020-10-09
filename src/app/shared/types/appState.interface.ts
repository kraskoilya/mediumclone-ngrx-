import { AuthStateInterface } from '../../auth/types/authState.interface';
import { PopularTagsStateInterface } from '../modules/popular-tags/types/popularTagsState';
import { FeedStateInterface } from './../modules/feed/types/feedState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  tags: PopularTagsStateInterface;
}

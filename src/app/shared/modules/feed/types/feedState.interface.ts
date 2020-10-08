import { GetFeedResponceInterface } from './getFeedResponce.interface';

export interface FeedStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetFeedResponceInterface | null;
}

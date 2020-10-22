import { CreateArticleStateInterface } from 'src/app/create-article/types/createArticleState.interface';
import { AuthStateInterface } from '../../auth/types/authState.interface';
import { PopularTagsStateInterface } from '../modules/popular-tags/types/popularTagsState';
import { ArticleStateInterface } from './../../article/types/article-state';
import { EditArticleStateInterface } from './../../edit-article/types/edit-article-state';
import { SettingsStateInterface } from './../../settings/store/types/settingsState.interface';
import { FeedStateInterface } from './../modules/feed/types/feedState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  tags: PopularTagsStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleStateInterface;
  editArticle: EditArticleStateInterface;
  settings: SettingsStateInterface;
}

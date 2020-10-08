import { ArticleInterface } from 'src/app/shared/types/article.interface';

export interface GetFeedResponceInterface {
  articles: ArticleInterface[];
  articlesCount: number;
}
